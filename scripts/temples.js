const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
})