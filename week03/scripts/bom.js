const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const chaptersKey = 'bom-chapters';

// Load chapters from local storage.
let chapters = getChapters();

// Display loaded chapters, if any.
chapters.forEach(showChapter);

function getChapters() {
    return JSON.parse(localStorage.getItem(chaptersKey)) || [];
}

function showChapter(chapter) {
    let li = document.createElement('li');
    li.textContent = chapter;

    // Delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        chapters = chapters.filter(item => item !== chapter);
        setChapters();
    });
    li.append(deleteButton);

    list.append(li);
}

function setChapters() {
    localStorage.setItem(chaptersKey, JSON.stringify(chapters));
}

button.addEventListener('click', () => {
    if (input.value) {
        // Add chapter to DOM.
        showChapter(input.value);

        // Append chapter to local storage.
        chapters.push(input.value);
        setChapters();

        // Clear input.
        input.value = '';
    }

    // Focus input.
    input.focus();
});