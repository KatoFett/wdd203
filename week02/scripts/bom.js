const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
        input.value = '';
    }
    input.focus();
});