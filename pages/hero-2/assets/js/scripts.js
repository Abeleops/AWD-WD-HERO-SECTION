function moveSwordTo(targetSelector) {
  const sword = document.getElementById('move-sword');
  const target = document.querySelector(targetSelector);

  // Get bounding rectangles
  const swordRect = sword.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  // Calculate the translation needed
  const deltaX = targetRect.left - swordRect.left;
  const deltaY = targetRect.top - swordRect.top;

  // Clone the sword and position it absolutely
  const swordClone = sword.cloneNode(true);
  swordClone.style.position = 'fixed';
  swordClone.style.left = swordRect.left + 'px';
  swordClone.style.top = swordRect.top + 'px';
  swordClone.style.width = swordRect.width + 'px';
  swordClone.style.height = swordRect.height + 'px';
  swordClone.style.zIndex = 9999;
  swordClone.style.pointerEvents = 'none';
  swordClone.id = 'moving-sword-clone';

  document.body.appendChild(swordClone);

  // Animate the clone
  swordClone.animate([
    { transform: 'translate(0, 0)' },
    { transform: `translate(${deltaX}px, ${deltaY}px)` }
  ], {
    duration: 1000,
    easing: 'cubic-bezier(0.4, 0.2, 0.2, 1)'
  });

  // Move the clone and then remove it
  setTimeout(() => {
    swordClone.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    setTimeout(() => {
      swordClone.remove();
      // Optionally, show the sword on the right or trigger another effect here
    }, 100); // Wait a bit before removing
  }, 1000);
}

// Example: Move to sword1, sword2, or sword3
document.getElementById('animate-sword-btn').onclick = function() {
  // Change '.sword1' to '.sword2' or '.sword3' for other swords
  moveSwordTo('.sword1');
};