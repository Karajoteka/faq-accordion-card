const spans = document.querySelectorAll('.faq-title');

spans.forEach(span => {
  span.addEventListener('click', () => {
    const p = span.nextElementSibling;

    if (p && p.style.display === 'none') {
      p.style.display = 'block';

      const paragraphs = document.querySelectorAll('.faq-content');
      paragraphs.forEach(paragraph => {
        if (paragraph !== p) {
          paragraph.style.display = 'none';
        }
      });

      spans.forEach(s => {
        s.classList.remove('active');
        s.querySelector('span').classList.remove('rotate');
      });

      span.classList.add('active');
      span.querySelector('span').classList.add('rotate');

    } else if (p) {
      p.style.display = 'none';
      span.classList.remove('active');
      span.querySelector('span').classList.remove('rotate');
    }
  });
});