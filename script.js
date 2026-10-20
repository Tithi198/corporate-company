document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const collapseEl = document.getElementById('mainNav');

  // Close mobile menu after clicking a link
  document.querySelectorAll('#mainNav .nav-link:not(.dropdown-toggle), #mainNav .dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      if (collapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
    });
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Subtle navbar background once the page is scrolled
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Cookie notice (remembers acceptance)
  const bar = document.getElementById('cookieBar');
  let accepted = false;
  try { accepted = localStorage.getItem('cookieAccepted') === '1'; } catch (e) {}
  if (!accepted) bar.hidden = false;
  document.getElementById('cookieOk').addEventListener('click', () => {
    try { localStorage.setItem('cookieAccepted', '1'); } catch (e) {}
    bar.hidden = true;
  });
});