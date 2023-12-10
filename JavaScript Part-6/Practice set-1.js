//Practice Qs-1

// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
// }

// printPoem();

//Practice Qs-2
//Create a Function to roll a dice & always display the value of the dice (1 to 6).

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();