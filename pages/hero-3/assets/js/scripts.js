const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const sanjiDefault = document.querySelector(".sanji");
const sanjiLeft = document.getElementById("sanji-left");
const sanjiRight = document.getElementById("first");

const descLeft = document.getElementById("sanji-desc");
const descRight = document.getElementById("sanji-back");

// Button 1 (Introduction)
btn1.addEventListener("mouseenter", () => {
  sanjiDefault.style.display = "none";
  sanjiLeft.style.display = "block";
  sanjiRight.style.display = "none";
  descLeft.classList.add("visible");
});

btn1.addEventListener("mouseleave", () => {
  sanjiDefault.style.display = "block";
  sanjiLeft.style.display = "none";
  descLeft.classList.remove("visible");
});

// Button 2 (Backstory)
btn2.addEventListener("mouseenter", () => {
  sanjiDefault.style.display = "none";
  sanjiLeft.style.display = "none";
  sanjiRight.style.display = "block";
  descRight.classList.add("visible");
});

btn2.addEventListener("mouseleave", () => {
  sanjiDefault.style.display = "block";
  sanjiRight.style.display = "none";
  descRight.classList.remove("visible");
});

document.addEventListener('DOMContentLoaded', function() {
  const introBtn = document.querySelector('.btn1');
  const introContent = document.querySelector('.sanji-intro');
  
  introBtn.addEventListener('mouseenter', function() {
    introContent.style.opacity = '1';
    introContent.style.visibility = 'visible';
    introContent.style.transform = 'translateX(0)';
  });
  
  introBtn.addEventListener('mouseleave', function() {
    introContent.style.opacity = '0';
    introContent.style.visibility = 'hidden';
    introContent.style.transform = 'translateX(-20px)';
  });
  
  // Backstory button functionality
  const backstoryBtn = document.querySelector('.btn2');
  const backstoryContent = document.querySelector('.sanji-backstory');
  
  backstoryBtn.addEventListener('mouseenter', function() {
    backstoryContent.style.opacity = '1';
    backstoryContent.style.visibility = 'visible';
    backstoryContent.style.transform = 'translateX(0)';
  });
  
  backstoryBtn.addEventListener('mouseleave', function() {
    backstoryContent.style.opacity = '0';
    backstoryContent.style.visibility = 'hidden';
    backstoryContent.style.transform = 'translateX(20px)';
  });
  
  // Mortal Enemy preview functionality
  const enemyBtn = document.querySelector('.btn3');
  const enemyPreview = document.querySelector('.mortal-enemy-preview');
  
  enemyBtn.addEventListener('mouseenter', function() {
    enemyPreview.style.opacity = '1';
    enemyPreview.style.visibility = 'visible';
    enemyPreview.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  enemyBtn.addEventListener('mouseleave', function() {
    enemyPreview.style.opacity = '0';
    enemyPreview.style.visibility = 'hidden';
    enemyPreview.style.transform = 'translate(-50%, -50%) scale(0.9)';
  });
});
