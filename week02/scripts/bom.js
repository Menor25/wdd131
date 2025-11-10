const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')



button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Close');
        li.append(deleteButton);
    }
})

deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
    input.value = '';
})
// console.dir(document);
// document.body.style.backgroundColor = 'grey';
// console.log(document.body.style.backgroundColor)