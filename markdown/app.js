const button = document.querySelector('button');
const ol = document.querySelector('#ol');

button.addEventListener('click', function () {
    ol.options[1] = 'тест';
})