const timestamp = document.querySelector('#timestamp');

timestamp.value = new Date().toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

const submitButton = document.querySelector('input[type=submit]');
const form = document.querySelector('form');
submitButton.addEventListener('click', () => {
    form.classList.remove('novalidate');
});