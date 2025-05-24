document.addEventListener('DOMContentLoaded', () => {
const items = document.querySelectorAll('.portfolio-item');
const observer = new IntersectionObserver((entries, observer) => {
    // Sort entries by vertical position for correct stagger
    const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

    visible.forEach((entry, i) => {
    const item = entry.target;
    if (!item.classList.contains('animated-up')) {
        setTimeout(() => {
        item.classList.add('animated-up');
        }, i * 150); // 150ms stagger
    }
      observer.unobserve(item); // Animate only once
    });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));
});