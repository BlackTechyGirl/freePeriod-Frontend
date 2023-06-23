function generateRandomNumber(){
    Math.floor(Math.random()*100)+1;
}

function checkGuess(guess, target){
    if(guess < target) {
        return 'Too low. Guess higher'
    }else if(guess > target){
        return 'Too high. Guess Lower'
    }else{
        return 'Correct'
    }
   
}

function playGame(){
    let target = generateRandomNumber();
    let guess;
    let message;

    do{
        guess = prompt('Guess a number between 1 to 100: ');
        message = checkGuess(guess, target);
        console.log(message);
    }while(message !== 'Correct');
}

console.log(playGame());