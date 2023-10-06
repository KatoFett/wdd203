const darkButton = document.querySelector('#toggleDarkModeButton');

darkButton.addEventListener('click', setDark);

function setDark() {
    let content = darkButton.textContent;
    let setToDark = content === 'Dark';
    // Change button text.
    darkButton.textContent = setToDark ? 'Light' : 'Dark';

    // Toggle body dark class.
    if (setToDark)
        document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    // Store dark mode in local storage.
    localStorage.setItem('wdd230-fox-dark', setToDark);
}

// Read dark mode from local storage.
let setToDark = localStorage.getItem('wdd230-fox-dark') === 'true';
if (setToDark) setDark();