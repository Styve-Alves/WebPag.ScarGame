

let evilLion = 10;
let vulture = 10;
let hyena = 10;
const timeLimit = 10;
let count = 0;
let timeRemaining = timeLimit;
let timer;

function startGame() {
  // disable the start button
  document.getElementById("clickButton").disabled = true;
  
  // enable the click button
  document.getElementById("clickButton").onclick = incrementCount;
  document.getElementById("clickButton").disabled = false;
  
  // start the timer
  timer = setInterval(() => {
    timeRemaining--;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.getElementById("message").innerHTML = `Time's up! You clicked the button ${count} times.`;
      if(count>Math.floor(Math.random() * 16) + 45){
        evilLion += 5;
        vulture += 10;
        hyena += 7
        document.getElementById("message").innerHTML = `Time's up! You clicked the button ${count} times. You now have ${evilLion} evil lions, ${vulture} vultures and ${hyena} hyenas`;
      }
      document.getElementById("clickButton").disabled = true;
    } else {
      document.getElementById("message").innerHTML = `Time remaining: ${timeRemaining} seconds`;
    }
  }, 1000);
}

function incrementCount() {
  count++;
}

document.getElementById("clickButton").disabled = false;


