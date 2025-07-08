ocument.addEventListener('DOMContentLoaded', function() {
  // Add parallax effect to background
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.querySelector('.wallpaper').style.transform = `translateY(${scrollPosition * 0.3}px)`;
  });
  
  // Animate stats on viewport entry
  const stats = document.querySelectorAll('.stat');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => {
    stat.style.opacity = 0;
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(stat);
  });
  
  // Clima-Tact hover effect
  const climaTact = document.querySelector('.clima-tact');
  const weaponShowcase = document.querySelector('.weapon-showcase');
  
  weaponShowcase.addEventListener('mouseenter', () => {
    climaTact.style.filter = 'drop-shadow(0 0 10px rgba(33, 150, 243, 0.8))';
  });
  
  weaponShowcase.addEventListener('mouseleave', () => {
    climaTact.style.filter = 'none';
  });
});