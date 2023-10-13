"use strict";

// Navigation
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
	let openClass = 'open';
	menuButton.classList.toggle(openClass);
	nav.classList.toggle(openClass);
});

// Visit counter
const visitsDisplay = document.querySelector('#pageVisits');
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
visitsDisplay.textContent = numVisits > 0 ? numVisits : 'This is your first visit. Welcome!';
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

// Copyright year
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Last modified
document.getElementById('lastModified').innerText = `Last Modified: ${document.lastModified}`;

// Weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=803815e520da3dd1e64ff655ef707df4'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
}

apiFetch();