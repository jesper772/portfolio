// ScrollReveal animations
ScrollReveal().reveal('.intro', {
  delay: 200,
  duration: 1000,
  distance: '50px',
  origin: 'bottom'
});
ScrollReveal().reveal('.quick-links .card', {
  delay: 300,
  duration: 800,
  distance: '20px',
  origin: 'bottom',
  interval: 200
});

// Particles background
tsParticles.load("particles-js", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 50 },
    color: { value: "#00d9ff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: { min: 1, max: 4 } },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "bounce"
    }
  },
  background: {
    color: "#0f2027"
  }
});
