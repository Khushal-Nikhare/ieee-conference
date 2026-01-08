// ============================================================
// SCROLL FADE-IN ANIMATION FOR IMAGE
// ============================================================

// Select all elements with fade-scroll class
const faders = document.querySelectorAll('.fade-scroll');

// IntersectionObserver options
const appearOptions = {
    threshold: 0.2,         // triggers when 20% of image is visible
    rootMargin: '0px 0px -50px 0px'
};

// Create observer
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('show');   // add animation class
        observer.unobserve(entry.target);     // animate only once
    });
}, appearOptions);

// Attach observer to each fade-scroll element
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('slide-in');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.slide-left, .slide-right').forEach(el => observer.observe(el));
