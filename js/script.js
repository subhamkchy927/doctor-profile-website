let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

function startSlideshow() {
    setInterval(changeImage, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Hamburger menu toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Optional: Allow Enter key to toggle the menu (for accessibility)
    menuToggle.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            navLinks.classList.toggle("show");
        }
    });

    // Slideshow initialization
    images.forEach(img => img.style.display = 'none');
    images[0].style.display = 'block';
    startSlideshow();
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your appointment request has been submitted.');
        form.reset();
    });
});

function redirectToMap() {
    const confirmed = confirm("Do you want to open Google Maps to find Dr. Khushboo Mishra?");
    if (confirmed) {
        window.open("https://maps.app.goo.gl/CeKwFSkPjbu4SSNAA", "_blank");
    }
}
