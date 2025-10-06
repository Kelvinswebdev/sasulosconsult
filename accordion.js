
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');

      // Collapse all other items
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) c.style.maxHeight = null;
      });

      // Toggle current item
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

