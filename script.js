const button = document.getElementById('themeToggle');

button.addEventListener('click', () => {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';

  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
});
