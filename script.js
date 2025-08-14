document.addEventListener('DOMContentLoaded', () => {
  // --- Search Box Functionality ---
  const searchBox = document.querySelector('.search-box');
  searchBox.value = ''; // Clear search on page load

  const colorBlocks = document.querySelectorAll('.color-block');

  searchBox.addEventListener('input', () => {
    const query = searchBox.value.trim().toLowerCase();

    colorBlocks.forEach(block => {
      const colorName = block.querySelector('span').textContent.toLowerCase();

      if (colorName.startsWith(query)) {
        block.style.display = 'flex';
      } else {
        block.style.display = 'none';
      }
    });
  });

  // --- Dark Mode Toggle Functionality ---
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark');
      } else {
        toggleBtn.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
