// Setup your Variables
var cirlce = "O";
var X = "X";


// Handle Restart game button
var reset = document.getElementById("idStartButton");
reset.addEventListener("click",resetGame);

// Grab all the play spaces in the board
var td = document.querySelectorAll(".horizontal");


// Clear all the play spaces in the board



// Setup click handlers for each play space on the board



// Handle a play space being clicked



// Switch player turn




// Check for winner or CAT/tie

function winner() {
alert("YOU WIN")
}

// winner();

function CAT() {
alert("TIE")
}
// CAT();

function resetGame() {
    console.log("reset click");
}