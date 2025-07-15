document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
    // Create the observer
    const observerOptions = {
      root: null,        // viewport
      rootMargin: '0px',
      threshold: 0.5     // element is in view if 50% is visible
    };
  
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the .active class
          entry.target.classList.add('active');
          // Optionally, unobserve it so it doesn't re-animate
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Observe each element
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  });
  