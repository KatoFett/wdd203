const grid = document.querySelector('#grid');
const url = "https://katofett.github.io/wdd230/chamber/data/members.json";
const toggleButton = document.querySelector('#btnToggleView');
let isListView = false;

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let phone = document.createElement('a');
        let membership = document.createElement('strong');
        let img = document.createElement('img');

        // Set card attributes.
        card.classList.add('card');

        // Set name attributes.
        name.textContent = member.name;

        // Set address attributes.
        address.textContent = member.address;

        // Set website attributes.
        website.textContent = member.website;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.setAttribute('title', 'Open link in new tab');

        // Set phone attributes.
        phone.textContent = member.phone;
        phone.setAttribute('href', `tel:${member.phone.replace(/\D/g, '')}`);

        // Set membership attributes.
        membership.textContent = member.membership;

        // Set image attributes.
        img.alt = member.name;
        img.loading = 'lazy';
        img.width = '300';
        img.height = '240';
        img.src = `images/${member.image}`;

        // Append children to card.
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(img);

        // Append card to document.
        grid.appendChild(card);
    });
};

async function getData() {
    const response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        displayMembers(json.members);
    }
    else prompt("Failed to retrieve the directory.");
}

document.querySelector('#btnToggleView').addEventListener('click', () => {
    isListView = !isListView;
    toggleButton.textContent = isListView ? 'Grid' : 'List';
    if (isListView) grid.classList.add('list');
    else grid.classList.remove('list');
});

getData();