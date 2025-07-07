const luffy = document.querySelector('.character');
const gearBtns = document.querySelectorAll('.card3 div');

gearBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    if (luffy) luffy.style.opacity = '0';
  });
  btn.addEventListener('mouseleave', () => {
    if (luffy) luffy.style.opacity = '1';
  });
});