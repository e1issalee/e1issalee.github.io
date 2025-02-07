// Add smooth scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.subtitle');
    if (!subtitle.textContent) {
        subtitle.textContent = 'Software Engineering Specialist';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Animate skill items with staggered delay
document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});