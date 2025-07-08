// Add scroll animations on stats, abilities, quote, and image

document.addEventListener('DOMContentLoaded', () => {
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  const selectors = [
    '.card',
    '.section.left .lower li',
    '.section.middle .lower blockquote',
    '.section.right .image-container img'
  ];
  const elements = document.querySelectorAll(selectors.join(','));
  elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
});