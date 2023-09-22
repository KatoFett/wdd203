const darkButton = document.querySelector('#toggleDarkModeButton');

darkButton.addEventListener('click', () => {
    // Change button text.
    let content = darkButton.textContent;
    darkButton.textContent = content == 'Dark' ? 'Light' : 'Dark';

    // Toggle body dark class.
    document.body.classList.toggle('dark');
});