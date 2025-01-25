// Toggle Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle mobile menu visibility
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open"); // Add or remove 'open' class
    const isOpen = navLinks.classList.contains("open");
    // Update menu button icon (open or close)
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when a link is clicked
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open"); // Remove 'open' class
    menuBtnIcon.setAttribute("class", "ri-menu-line"); // Reset to menu icon
});

// ScrollReveal Configuration Options
const scrollRevealOptions = {
    distance: "50px", // Distance elements move during reveal
    duration: 1000, // Animation duration in milliseconds
    origin: "bottom", // Default reveal direction
};

// Initialize ScrollReveal
const sr = ScrollReveal();

// Helper function to apply ScrollReveal with variations
const revealElements = (selector, options) => {
    sr.reveal(selector, { ...scrollRevealOptions, ...options });
};

// Header Animations
revealElements(".header-image img", { origin: "right" });
revealElements(".header-container h1", { delay: 500 });
revealElements(".header-container h2", { delay: 1000 });
revealElements(".header-container p", { delay: 1500 });
revealElements(".header-btn", { delay: 2000 });

// About Section Animations
revealElements(".about-image img", { origin: "left" });
revealElements(".about-container .section-header", { delay: 500 });
revealElements(".about-container p", { delay: 1000 });
revealElements(".about-btn", { delay: 1500 });

// Services Section Animations
revealElements(".service-card", { interval: 300 }); // Interval for staggered animations

// Facility Section Animations
revealElements(".facility-content .section-header");
revealElements(".facility-content p", { delay: 500 });

// Mentor Section Animations
revealElements(".mentor-card", { interval: 300 }); // Staggered mentor card animations

// Banner Animations
revealElements(".banner-content h2");
revealElements(".banner-content p", { delay: 500 });
