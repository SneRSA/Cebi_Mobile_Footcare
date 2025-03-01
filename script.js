// Smooth scrolling for anchor links with active link highlighting
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveLink(this);
        }
    });
});

// Function to set active link in navigation
function setActiveLink(activeAnchor) {
    document.querySelectorAll('.nav-list a').forEach(link => link.classList.remove('active'));
    activeAnchor.classList.add('active');
}

// Mobile Navigation Toggle & Close on Outside Click
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
    
    document.addEventListener('click', (event) => {
        if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
            navList.classList.remove('active');
        }
    });
}

// Lazy loading for images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Basic Form Validation
document.querySelector('form')?.addEventListener('submit', function(event) {
    const requiredFields = this.querySelectorAll('[required]');
    let valid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    if (!valid) {
        event.preventDefault();
        alert('Please fill in all required fields correctly.');
    }
});