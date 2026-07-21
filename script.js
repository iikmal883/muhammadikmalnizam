// Interactive UI logic for the portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling activation for nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simple interaction confirmation in console
    console.log("Electronic Engineering Portfolio initialized successfully.");
});
