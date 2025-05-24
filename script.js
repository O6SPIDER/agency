// Hamburger menu toggle and auto-close on nav link click
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = navLinks.querySelectorAll("a");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Auto-close menu when a nav link is clicked (on mobile)
  navItems.forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
});

// Typewriter Effect
const typewriterElement = document.getElementById("typewriter");

const typewriterTexts = [
  "Welcome to Spiderwebs",
  "Your Digital Partner",
  "We Build Stunning Websites",
];
let typewriterIndex = 0; // Tracks the current text in the array
let charIndex = 0; // Tracks the current character in the text

function typeText() {
  if (charIndex < typewriterTexts[typewriterIndex].length) {
    // Add the next character to the typewriter element
    typewriterElement.textContent += typewriterTexts[typewriterIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Typing speed (100ms per character)
  } else {
    // Pause before deleting the text
    setTimeout(deleteText, 2000); // Pause for 2 seconds
  }
}

function deleteText() {
  if (charIndex > 0) {
    // Remove the last character from the typewriter element
    typewriterElement.textContent = typewriterTexts[typewriterIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50); // Deleting speed (50ms per character)
  } else {
    // Move to the next text in the array
    typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length; // Loop back to the first text
    setTimeout(typeText, 500); // Pause before typing the next text
  }
}

// Start the typewriter effect
typeText();

// Change header background on scroll
const header = document.querySelector(".header");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetHeight; // Get the height of the hero section
  if (window.scrollY > heroBottom) {
    header.classList.add("scrolled"); // Add the 'scrolled' class when past the hero section
  } else {
    header.classList.remove("scrolled"); // Remove the 'scrolled' class when above the hero section
  }
});

// Testimonial Slider
const slides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);

// Horizontal Scroll for Testimonial Section
const testimonialScroll = document.querySelector(".testimonial-scroll");

// Enable smooth scrolling with mouse wheel or trackpad
testimonialScroll.addEventListener("wheel", (event) => {
  event.preventDefault(); // Prevent vertical scrolling
  testimonialScroll.scrollLeft += event.deltaY; // Scroll horizontally based on vertical wheel movement
});

// Testimonial Scroll with Zoom Effect
const testimonialSlides = document.querySelectorAll(".testimonial-slide");

// Intersection Observer to detect center alignment
const observerOptions = {
  root: testimonialScroll, // Observe within the scrollable container
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the slide is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active"); // Add zoom effect
    } else {
      entry.target.classList.remove("active"); // Remove zoom effect
    }
  });
});

// Observe each testimonial slide
testimonialSlides.forEach((slide) => observer.observe(slide));

// Testimonial Scroll with Cursor-Based Zoom Effect
function updateZoomEffect() {
  const scrollCenter = testimonialScroll.scrollLeft + testimonialScroll.offsetWidth / 2;

  testimonialSlides.forEach((slide) => {
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const distance = Math.abs(scrollCenter - slideCenter);

    // Calculate scale based on distance from the center
    const scale = Math.max(1 - distance / 500, 0.8); // Scale between 0.8 and 1
    const opacity = Math.max(1 - distance / 500, 0.5); // Opacity between 0.5 and 1

    slide.style.transform = `scale(${scale})`;
    slide.style.opacity = opacity;
  });
}

// Attach the scroll event to the testimonial container
testimonialScroll.addEventListener("scroll", updateZoomEffect);

// Initialize the zoom effect on page load
updateZoomEffect();

// Blog Section Pop-Up Effect
const blogScroll = document.querySelector(".blog-scroll");

function handleBlogPopUp() {
  const blogSection = blogScroll.getBoundingClientRect();
  if (blogSection.top < window.innerHeight && blogSection.bottom > 0) {
    blogScroll.classList.add("active"); // Add the active class to trigger the pop-up effect
  }
}

// Attach the scroll event to the window
window.addEventListener("scroll", handleBlogPopUp);

// Initialize the pop-up effect on page load
handleBlogPopUp();

// Enable smooth horizontal scrolling for the blog section
blogScroll.addEventListener("wheel", (event) => {
  event.preventDefault(); // Prevent vertical scrolling
  blogScroll.scrollLeft += event.deltaY; // Scroll horizontally based on vertical wheel movement
});
// Parallax effect for all .parallax-section
window.addEventListener('scroll', function() {
  document.querySelectorAll('.parallax-section').forEach(function(section) {
    const speed = 0.3; // Adjust for more/less parallax
    const offset = window.scrollY - section.offsetTop;
    section.style.backgroundPosition = `center ${offset * speed}px`;
  });
});