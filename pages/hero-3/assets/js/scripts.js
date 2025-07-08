const btn2 = document.querySelector('.btn2');
const sanji = document.querySelector('.sanji');
const sanjiRight = document.querySelector('#first');

btn2.addEventListener('mouseenter', () => {
  sanji.style.opacity = '0';
  sanjiRight.style.opacity = '1';
});

btn2.addEventListener('mouseleave', () => {
  sanji.style.opacity = '1';
  sanjiRight.style.opacity = '0';
});