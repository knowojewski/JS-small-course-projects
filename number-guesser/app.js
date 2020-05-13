// Game val
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const UIgame = document.getElementById('game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min and max

UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again even listener
UIgame.addEventListener('mousedown', function(e){
    if(e.target.className == 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);

    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number betwen ${min} and ${max}`, 'red');
    } else {
        
    }
    // Game Over - win
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        // Wrong number
        guessesLeft = guessesLeft - 1;

        if(guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `You don't have any guesses left! The correct number was ${winningNum}.`);
        } else {
            // Clear input
            UIguessInput.value = '';

            setMessage(`Wrong number, you have ${guessesLeft} guesses left!`, 'black');
        }
        
    }
});

function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
}

// Game over
function gameOver(won, msg) {
    let color;
    if(won === true){
        color = 'green';
    } else {
        color = 'red';
    }

    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = color;
    UImessage.style.color = color;
    setMessage(msg);

    // PLAY AGAIN 
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className = 'play-again';

}



// function hideMessage() {
//     UImessage.style.display = 'none';
// }

