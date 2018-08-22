// Setup your Variables
var circle = "O";
var X = "X";


// Handle Restart game button
var reset = document.getElementById("idStartButton");
reset.addEventListener("click",buttonClick);

// Grab all the play spaces in the board
var td = document.querySelectorAll(".horizontal");


// Clear all the play spaces in the board

var squares= document.querySelectorAll(".tsquare");

console.log("squares.length " +squares.length);


// Setup click handlers for each play space on the board


for (var i =0; i < squares.length; i++)
{
    squares[i].addEventListener("click", buttonClick);
}
// Handle a play space being clicked
document.getElementById("").value="Hide Filter";


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

function buttonClick() {
    console.log("reset click");
}
