/* ------- Page Rating -------- */

const ratingText = document.querySelector('#rating');
const ratingInput = document.querySelector('#pageRating');

ratingInput.addEventListener('input', setRatingText);
ratingInput.addEventListener('change', setRatingText);

function setRatingText() {
    ratingText.textContent = ratingInput.value;
}

setRatingText();

/* ------- Password Match -------- */

const pwd = document.querySelector('#password');
const confPwd = document.querySelector('#confirmPassword');
const pwdMsg = document.querySelector('#passwordMsg');

confPwd.addEventListener('focusout', checkMatch);

function checkMatch() {
    let isValid = pwd.value === confPwd.value;
    if (isValid) {
        confPwd.classList.remove('invalid');
        pwdMsg.textContent = '';
    }
    else {
        confPwd.classList.add('invalid');
        pwdMsg.textContent = 'Passwords do not match.';
    }

    return isValid;
}

/* ------- Form Submit -------- */

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    if (!checkMatch())
        e.preventDefault();
});
