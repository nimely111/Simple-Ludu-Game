const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result');

form.addEventListener('submit', e => {
    // stop form from submiting
    e.preventDefault();

       // convert input value from string to number
const inputValue = parseInt(input.value);
const randomNum = Math.floor(Math.random() * 6);
console.log(randomNum);
})