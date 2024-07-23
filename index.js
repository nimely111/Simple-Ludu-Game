const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result');
const backgroundAudio = document.getElementById('backgroundAudio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const wrongEffect = document.getElementById('wrong-effect');
const winEffect = document.getElementById('win-effect');

// Optional: Set the volume of the background, wrong, and win effect audio
backgroundAudio.volume = 0.1;
wrongEffect.volume = 0.7;
winEffect.volume = 0.7;

playButton.addEventListener('click', () => {
    backgroundAudio.play();
});

pauseButton.addEventListener('click', () => {
    backgroundAudio.pause();
});

wrongEffect.addEventListener('click', (e) => {
    wrongEffect.currentTime = 0;
    wrongEffect.play();
});

winEffect.addEventListener('click', (e) => {
    winEffect.currentTime = 0;
    winEffect.play();
});

form.addEventListener('submit', e => {
    // stop form from submiting
    e.preventDefault();

// convert input value from string to number
const inputValue = parseInt(input.value);
const randomNum = Math.floor(Math.random() * 6) + 1;
console.log(`Random Number: ${randomNum}`);


if(isNaN(inputValue) || randomNum < 1 || randomNum > 6){
    alert("Please Enter a valid number between 1 & 6")
}else{
    if(inputValue === randomNum){
        result.innerHTML = `Congratulations! You guessed the correct number ${randomNum} 🎉`;
        console.log(inputValue, 'You got one');
        result.style.color = 'green';
        }else if(inputValue == 2){
            result.innerHTML = 'You got ' + '🎲🎲';
            result.style.color = 'blue'
            console.log(inputValue,'You got two');
        }else if(inputValue == 3){
            result.innerHTML = 'You got '+ '🎲🎲🎲';
            result.style.color = 'blue'
            console.log(inputValue,'You got three');
        }else if(inputValue == 4){
            result.innerHTML = 'You got ' + '🎲🎲🎲🎲';
            result.style.color = 'blue'
            console.log(inputValue,'You got four');
        }else if(inputValue ==5){
            result.innerHTML = 'You got '+ '🎲🎲🎲🎲🎲';
            result.style.color = 'blue'
            console.log(inputValue,'You got five');
        }else if(inputValue == 6){
            result.innerHTML = 'You got ' + '🎲🎲🎲🎲🎲🎲';
            result.style.color = 'blue'
        console.log(inputValue,'You got six');
    }else{
        console.log(inputValue,'You did not roll the dice');
        result.innerHTML = 'You did not roll the dice' + '❌😛😜😝';
        result.style.color = 'red'
    }
    input.value = ''
}
})