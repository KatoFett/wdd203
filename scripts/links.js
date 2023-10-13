const baseURL = 'https://katofett.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;
const links = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    // Iterate through each week.
    for (const week of data.weeks) {
        let li = document.createElement('li');

        // Add week: text
        let weekText = document.createTextNode(`${week.week}: `);
        li.appendChild(weekText);

        // Iterate through each link.
        let appendSeparator = false;
        for (const link of week.links) {

            // Add separator
            if (appendSeparator) {
                let separator = document.createTextNode(' | ');
                li.appendChild(separator);
            }

            // Create link
            let a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.textContent = link.title;

            // Add link
            li.appendChild(a);

            // Flag to add separator for next link.
            appendSeparator = true;
        }
        links.appendChild(li);
    }
}

getLinks();