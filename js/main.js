// =====================
// Loader Animation
// =====================
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Wait a short time so fade-in animation completes
    setTimeout(() => {
        loader.classList.add("fade-out"); // triggers CSS fade-out
    }, 1200); // logo stays visible 1.2s

    // Remove loader from DOM after fade-out
    setTimeout(() => {
        loader.style.display = "none";
    }, 1800); // matches fade-out transition
});

// =====================
// Scroll Reveal for .fade-up sections
// =====================
const faders = document.querySelectorAll(".fade-up");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const hobbyStrips = document.querySelectorAll(".hobby-strip");
hobbyStrips.forEach(strip => {
    appearOnScroll.observe(strip); // reuse the existing IntersectionObserver
});

// Hover play videos in hobbies section
const hobbystrips = document.querySelectorAll('.hobby-strip');

hobbystrips.forEach(strip => {
  const video = strip.querySelector('video');

  strip.addEventListener('mouseenter', () => {
    video.play();
  });

  strip.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});