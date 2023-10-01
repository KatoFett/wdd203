const welcomeMessage = document.querySelector('#welcomeMessage');
const msToDays = 84600000;
const now = Date.now();
const storageKey = 'discovery-visit';

let storedDate = localStorage.getItem(storageKey);

if (storedDate) {
    const lastVisitDate = parseInt(storedDate);
    const days = (now - lastVisitDate) / msToDays;
    if (days < 1) {
        welcomeMessage.textContent = "Back so soon! Awesome!";
    }
    else {
        welcomeMessage.textContent = `You last visited ${Math.round(days)} day${(days != 1 ? 's' : '')} ago.`;
    }
}
else {
    welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem(storageKey, now);