const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;