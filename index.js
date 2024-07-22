const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result');
const backgroundAudio = document.getElementById('backgroundAudio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const wrongEffect = document.getElementById('wrong-effect');
const winEffect = document.getElementById('win-effect');



form.addEventListener('submit', e => {
    // stop form from submiting
    e.preventDefault();

       // convert input value from string to number
const inputValue = parseInt(input.value);
const randomNum = Math.floor(Math.random() * 6);
console.log(randomNum);

if(isNaN(inputValue)){
    alert("Please Enter a valid number between 1 & 6")
}else{
    if(inputValue == 1){
        result.innerHTML = 'You got '+ '🎲';
        console.log(inputValue, 'You got one');
          result.style.color = 'blue'
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