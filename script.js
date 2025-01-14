// Handle navbar background on scroll
// OLD NAVIGATION BAR
// document.addEventListener('DOMContentLoaded', function() {
//     const nav = document.querySelector('.fixed-nav');
    
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             nav.classList.add('scrolled');
//         } else {
//             nav.classList.remove('scrolled');
//         }
//     });
// });

// Create an Intersection Observer to handle scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item-visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when at least 10% of the item is visible
});

// Observe all timeline items when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.add('timeline-item-hidden');
        observer.observe(item);
    });
});