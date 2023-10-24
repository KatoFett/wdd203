const todayWeather = document.querySelector('#weather > .day-weather');
const forecast = document.querySelector('#forecast');
const spotlight = document.querySelector('#spotlight');
const lat = '43.82';
const lon = '-111.79';
const apiKey = '803815e520da3dd1e64ff655ef707df4';
const todayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const membersUrl = "https://katofett.github.io/wdd230/chamber/data/members.json";

async function getTodayWeather() {
    try {
        const response = await fetch(todayUrl);
        if (response.ok) {
            const data = await response.json();
            setWeatherContent(todayWeather, data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function setWeatherContent(section, data) {
    const currentTemp = section.querySelector('p');
    const weatherIcon = section.querySelector('img');
    const captionDesc = section.querySelector('figcaption');
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${desc}`;
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecastResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayForecastResults(data) {
    let shownResults = new Array();
    let currentDate = new Date();

    // Filter to 1 forecast per day.
    for (d of data.list) {
        const dDate = new Date(d.dt_txt);
        // Get next day for within the same 3 hours.
        if (dDate.getDate() > currentDate.getDate() && dDate.getHours() >= currentDate.getHours()) {
            currentDate = dDate;
            shownResults.push(d);
        }
    }

    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let caption = document.createElement('figcaption');

        // Set li attributes.
        li.classList.add('day-weather');

        // Set h4 attributes.
        const date = new Date(shownResults[i].dt_txt);
        h4.textContent = date.toLocaleDateString('en-us', { weekday: 'short' });

        // Append figure children.
        figure.appendChild(img);
        figure.appendChild(caption);

        // Append li attributes.
        li.appendChild(h4);
        li.appendChild(figure);
        li.appendChild(p);

        // Append to forecast.
        forecast.appendChild(li);

        // Set content of the elements.
        setWeatherContent(li, shownResults[i]);
    }
}

async function getBusinessSpotlight() {
    const response = await fetch(membersUrl);
    if (response.ok) {
        let json = await response.json();
        displayMembers(json.members);
    }
    else prompt("Failed to retrieve the directory.");
}
const displayMembers = (members) => {
    let availableSpotlights = members.filter(m => m.membership == "Silver" || m.membership == "Gold");

    // Spotlight 2 businesses.
    for (var i = 0; i < 2; i++) {
        // Get random business.
        const idx = Math.floor(Math.random() * availableSpotlights.length);
        const member = availableSpotlights[idx];

        // Remove from available spotlights.
        availableSpotlights.splice(idx, 1);

        // Create HTML elements.
        let div = document.createElement('div');
        let img = document.createElement('img');
        let slogan = document.createElement('p');
        let name = document.createElement('strong');

        // Set conatiner attributes.
        div.classList.add('card');

        // Set image attributes.
        img.alt = member.name;
        img.loading = 'lazy';
        img.width = '150';
        img.height = '120';
        img.src = `images/${member.image}`;

        // Set slogan attributes.
        slogan.textContent = member.slogan;

        // Set name attributes.
        name.textContent = member.name;

        // Append children to div.
        div.appendChild(slogan);
        div.appendChild(name);
        div.appendChild(img);

        // Append to spotlight.
        spotlight.appendChild(div);
    }
};

getTodayWeather();
getForecast();
getBusinessSpotlight();