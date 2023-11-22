function toggleDarkMode() {
    const body = document.body;
    const container = document.getElementById('container');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode-container');
}
