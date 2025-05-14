document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
  
    // Load saved theme or default to light
    let currentThemeSetting = localStorage.getItem('theme') || 'light';
  
    // Apply it to <html>
    document.documentElement.setAttribute('data-theme', currentThemeSetting);
  
    // Function to update button text and aria-label
    const updateButton = (theme) => {
      const cta = theme === 'dark'
        ? 'Change to light theme'
        : 'Change to dark theme';
      button.setAttribute('aria-label', cta);
    };
  
    // Set initial button state
    updateButton(currentThemeSetting);
  
    // Toggle theme on click
    button.addEventListener('click', () => {
      currentThemeSetting = currentThemeSetting === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentThemeSetting);
      localStorage.setItem('theme', currentThemeSetting);
      updateButton(currentThemeSetting);
    });
  });
  