const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dob = document.createElement('p');
        let pob = document.createElement('p');

        // Set fullname attributes.
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set portrait attributes.
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${fullName.textContent}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '240px');
        portrait.setAttribute('height', '340px');

        // Set date of birth attributes.
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Set place of birth attributes:
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append elements to the card.
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);

        // Append card to the DOM.
        cards.appendChild(card);
    });
};

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData();