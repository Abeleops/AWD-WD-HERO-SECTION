 const swordLinks = document.querySelectorAll('.sword-link');
  const descriptions = document.querySelectorAll('.sword-desc');
  let lockedSword = null;

  swordLinks.forEach(link => {
    const swordId = link.getAttribute('data-sword');
    const desc = document.getElementById(`desc-${swordId}`);

    // Hover - show if not locked
    link.addEventListener('mouseenter', () => {
      if (lockedSword !== desc) {
        descriptions.forEach(d => {
          if (d !== lockedSword) d.classList.remove('active');
        });
        desc.classList.add('active');
      }
    });

    // Leave - hide if not locked
    link.addEventListener('mouseleave', () => {
      if (lockedSword !== desc) {
        desc.classList.remove('active');
      }
    });

    // Click - toggle lock
    link.addEventListener('click', (e) => {
      e.preventDefault();

      if (lockedSword === desc) {
        // Unlock if already locked
        desc.classList.remove('active');
        lockedSword = null;
      } else {
        // Lock new one, hide others
        descriptions.forEach(d => d.classList.remove('active'));
        desc.classList.add('active');
        lockedSword = desc;
      }
    });
  });