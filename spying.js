// Declare array to hold information about the king
const kingInfo = [
    { name: 'lions', value: 100 },
    { name: 'zebras', value: 200 },
    { name: 'birds', value: 50 },
    { name: 'territory', value: 80 }
  ];
  
  // Function to update kingInfo array based on spying success
  function updateKingInfo(successLevel) {
    // Logic to update the kingInfo array based on the level of success
    for (let i = 0; i < kingInfo.length; i++) {
      if (kingInfo[i].name === 'lions') {
        kingInfo[i].value += successLevel * 10;
      } else if (kingInfo[i].name === 'zebras') {
        kingInfo[i].value -= successLevel * 5;
      } else if (kingInfo[i].name === 'birds') {
        kingInfo[i].value += successLevel * 2;
      } else if (kingInfo[i].name === 'territory') {
        kingInfo[i].value += successLevel * 8;
      }
    }
  }
  
  const spyingForm = document.querySelector('#spying-form');
  const resultsDiv = document.querySelector('#results');
  
  function initiateSpyingAction(animalType, animalCount, diceRoll) {
    let successCount = 0;
    let failureCount = 0;
    let successProbability = 0.5;
  
    // Modify the success probability based on the player's dice roll
    if (diceRoll <= 3) {
      successProbability *= 0.5;
    } else {
      successProbability *= 1.5;
    }
  
    // Simulate the spying action for each animal
    for (let i = 0; i < animalCount; i++) {
      // Generate a random number between 0 and 1 to determine success or failure
      if (Math.random() < successProbability) {
        // The spying attempt was successful
        successCount++;
      } else {
        // The spying attempt failed
        failureCount++;
      }
    }
  
    // Return an object with the results of the spying action
    return {
        animalType: animalType,
        successCount: successCount,
        failureCount: failureCount
    };
}

  
  function displayResults(lions, zebras, birds, territory) {
    let resultHtml = "<h2>Spying Results</h2>";
    resultHtml += "<p>Lions in Mufasa's kingdom: " + lions + "</p>";
    resultHtml += "<p>Zebras in Mufasa's kingdom: " + zebras + "</p>";
    resultHtml += "<p>Birds in Mufasa's kingdom: " + birds + "</p>";
    resultHtml += "<p>Territory controlled by Mufasa (as % of savanna): " + territory + "</p>";
    resultHtml += "<button id='roll-again-button'>Roll Again</button>";
    resultsDiv.innerHTML = resultHtml;
    document.getElementById("spying-form").style.display = "none";
    document.getElementById("roll-the-dice").style.display = "none";
    resultsDiv.style.display = "block";
  
    document.getElementById("roll-again-button").addEventListener("click", function() {
      document.getElementById("spying-form").style.display = "flex";
      document.getElementById("results").style.display = "none";
    });
  }


  document.querySelector('.btn-success').addEventListener('click', (event) => {
    event.preventDefault();
    const animalType = spyingForm.elements['animal-type'].value;
    const animalCount = spyingForm.elements['animal-count'].value;
          
    // Otherwise, continue with the spying action and show the Roll the Dice minigame
    const spyingResults = initiateSpyingAction(animalType, animalCount);
    
    // Pass the individual properties to the displayResults function
    displayResults(spyingResults.successCount, spyingResults.failureCount, spyingResults.successCount, spyingResults.successCount);
    showRollTheDice();
  });
  
      
      function showRollTheDice() {
        // Hide the spying form and results div
        spyingForm.style.display = 'none';
        resultsDiv.style.display = 'none';
        
        // Show the Roll the Dice minigame
        const rollTheDiceDiv = document.querySelector('#roll-the-dice');
        rollTheDiceDiv.style.display = 'block';
        
        // Add an event listener to the Roll button
        const rollButton = document.querySelector('#roll-button');
        rollButton.addEventListener('click', () => {
          // Generate a random number between 1 and 6
          const rollResult = Math.floor(Math.random() * 6) + 1;
          
          // Display the result
          const rollResultDiv = document.querySelector('#roll-result');
          rollResultDiv.textContent = `You rolled a ${rollResult}!`;
        });
        
        // Clear the previous roll result
        const rollResultDiv = document.querySelector('#roll-result');
        rollResultDiv.textContent = '';
      }      

// Add an event listener to the "Return to Spying" button
const returnToSpyingButton = document.createElement('button');
returnToSpyingButton.textContent = 'Return to Spying';
returnToSpyingButton.addEventListener('click', () => {
  // Hide the Roll the Dice minigame
  const rollTheDiceDiv = document.querySelector('#roll-the-dice');
  rollTheDiceDiv.style.display = 'none';
  
  // Show the spying form and results div
  spyingForm.style.display = 'block';
  resultsDiv.style.display = 'block';
});
document.querySelector('#roll-the-dice').appendChild(returnToSpyingButton);