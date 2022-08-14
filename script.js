const msgArea = document.querySelector('#comment textarea');
const recieved = document.querySelector('#recieved');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', () => {
    recieved.innerHTML += '<li>' + msgArea.value + '</li>';
    msgArea.value = '';
});