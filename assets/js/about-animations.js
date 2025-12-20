/* ============================================
   ABOUT PAGE - INTERACTIVE ANIMATIONS
   ============================================ */

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 98 ? '%' : target === 17 ? '' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target === 98 ? '%' : target === 17 ? '' : '+');
        }
    }, 16);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate counter if it's a counter element
            if (entry.target.classList.contains('counter-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (target && entry.target.textContent === '0') {
                    animateCounter(entry.target, target);
                }
            }
        }
    });
}, observerOptions);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Observe counter numbers
    document.querySelectorAll('.counter-number').forEach(counter => {
        observer.observe(counter);
    });
    
    // Observe stagger items
    document.querySelectorAll('.stagger-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Add hover effects to fun fact cards
    document.querySelectorAll('.fun-fact-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
