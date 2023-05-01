function goToSpyPage() {
    window.location.href = "spying.html"; 
  }

  function goToRecruitPage() {
    window.location.href = "recrute.html"; 
  }

  function goToMapPage() {
    window.location.href = "map.html"; 
  }
  const troopsAmount = {
    hyenas: 50,
    vultures: 100,
    evilLions: 20,
    territory: 10
  };

  const scarTroops = [
    { type: "Hyenas", amount: troopsAmount.hyenas, strength: 10 },
    { type: "Vultures", amount: troopsAmount.vultures, strength: 5 },
    { type: "Evil Lions", amount: troopsAmount.evilLions, strength: 30 },
    { type: "Savanna", amount: troopsAmount.territory, strength:5}
  ];

  const mufasaTroops = [
    { animal: "Lions", amount: 50, strength: 30 },
    { animal: "Zebras", amount: 100, strength: 15 },
    { animal: "Birds", amount: 200, strength:5 }
  ];
function showTroops(){
    let troopsText = "";

    // Loop through the array and create a new text string for each object
    scarTroops.forEach(troop => {
      troopsText += `${troop.type}: ${troop.amount}\n`;
    });
  
    // Display the text in an alert box
    alert(troopsText);
    
}

  const getArmyValue = (army) => {
    return army.reduce((acc, curr) => acc + (curr.amount * curr.strength), 0);
  }
  
const scarTroopsValue = getArmyValue(scarTroops);
const mufasaTroopsValue = getArmyValue(mufasaTroops);
  
  

function confirmFight() {
    if (confirm("Are you sure you want to fight?")) {

        console.log(scarTroopsValue)
        console.log(mufasaTroopsValue)
        
        if (scarTroopsValue > mufasaTroopsValue) {
            alert("ScarTroops won!");
            document.getElementById("mapScar").style.display = "block";
            document.getElementById("mapMufasa").style.display = "none";
            
        } 
        else if (scarTroopsValue === mufasaTroopsValue) {
            alert("Infortunately no one won, every single animal is laying on the battlefield")
        }
        else {
            alert("Mufasa's troops win!");
            document.getElementById("mapMufasa").style.display = "block";
            document.getElementById("mapScar").style.display = "none";
            
        }
    }
}







