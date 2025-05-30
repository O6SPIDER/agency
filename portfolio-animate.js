document.addEventListener('DOMContentLoaded', () => {
const items = document.querySelectorAll('.portfolio-item');
const observer = new IntersectionObserver((entries, observer) => {

    const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

    visible.forEach((entry, i) => {
    const item = entry.target;
    if (!item.classList.contains('animated-up')) {
        setTimeout(() => {
        item.classList.add('animated-up');
        }, i * 150);
    }
    observer.unobserve(item);
    });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));
});