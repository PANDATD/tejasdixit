// scripts.js

// Smooth Scroll for Navigation Links
const smoothScrollTo = (target) => {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// Event delegation for navigation links
document.addEventListener('click', function(e) {
    if (e.target.matches('nav a')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        smoothScrollTo(target);
    }
});

// Form Validation for Contact Form
const validateForm = (form) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }

    // Further validation for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true; // Form is valid
};

document.querySelector('form').addEventListener('submit', function(e) {
    if (!validateForm(this)) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

// Mobile Menu Toggle (Optimized)
const nav = document.querySelector('nav ul');
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.textContent = 'Menu';
mobileMenuToggle.classList.add('mobile-menu-toggle');

nav.parentNode.insertBefore(mobileMenuToggle, nav);

mobileMenuToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
});

// Event delegation for mobile menu toggle
nav.addEventListener('click', function(e) {
    if (e.target.matches('nav a')) {
        nav.classList.remove('show'); // Hide menu after link is clicked
    }
});

// CSS to support mobile menu toggle
const style = document.createElement('style');
style.textContent = `
    nav ul {
        display: none;
    }
    nav ul.show {
        display: block;
    }
    .mobile-menu-toggle {
        display: block;
        margin: 10px;
        background: #333;
        color: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);
