// Make elements with .draggable movable
(function() {
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach(elem => {
    elem.style.position = 'absolute';
    elem.addEventListener('mousedown', onMouseDown);
  });

  function onMouseDown(e) {
    const el = e.target;
    let startX = e.clientX;
    let startY = e.clientY;
    const rect = el.getBoundingClientRect();
    const offsetX = startX - rect.left;
    const offsetY = startY - rect.top;

    function onMouseMove(eMove) {
      el.style.left = `${eMove.clientX - offsetX}px`;
      el.style.top = `${eMove.clientY - offsetY}px`;
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
})();