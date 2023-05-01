// generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 5) + 1;

// set the guess limit
const guessLimit = 2;

// keep track of the number of guesses
let numGuesses = 0;

function checkGuess() {
  // get the player's guess from the input field
  const guess = parseInt(document.getElementById("guess").value);

  // increment the number of guesses
  numGuesses++;

  // check if the guess is correct
  if (guess === secretNumber) {
    // display a congratulatory message
    document.getElementById("message").innerHTML = `Congratulations! You guessed the number in ${numGuesses} guesses. You 10% of villain land.`;
  } else if (guess < secretNumber && numGuesses < guessLimit) {
    // give the player a hint
    document.getElementById("message").innerHTML = `Too low! You have ${guessLimit - numGuesses} guesses left. Guess again:`;
  } else if (guess > secretNumber && numGuesses < guessLimit) {
    // give the player a hint
    document.getElementById("message").innerHTML = `Too high! You have ${guessLimit - numGuesses} guesses left. Guess again:`;
  } else {
    // display a game over message
    document.getElementById("message").innerHTML = `Sorry, you ran out of guesses. The secret number was ${secretNumber}. You lose 5% of villain land`;
  }
}