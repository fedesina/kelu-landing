document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link (for mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '20px 0';
        }
    });
    
    // Smooth animations on scroll
    // Simple animation function to replace AOS
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.benefit-card, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('benefit-card') 
                    ? 'translateY(0)' 
                    : 'translateX(0)';
            }
        });
    };
    
    // Initialize element styles
    const initElements = () => {
        const elements = document.querySelectorAll('.benefit-card, .step');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            if (element.classList.contains('benefit-card')) {
                element.style.transform = 'translateY(30px)';
            } else {
                element.style.transform = 'translateX(-30px)';
            }
        });
    };
    
    // Initialize and run on scroll
    initElements();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});