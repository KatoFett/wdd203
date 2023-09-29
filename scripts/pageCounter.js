"use strict";

const visitsDisplay = document.querySelector('#pageVisits');
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
visitsDisplay.textContent = numVisits > 0 ? numVisits : 'This is your first visit. Welcome!';
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);