// Setup your Variables
var circle = "O";
var X = "X";
var squares= document.querySelectorAll(".tsquare");

// Handle Restart game button
var reset = document.getElementById("idStartButton");
reset.addEventListener("click", clearBoard);

// Grab all the play spaces in the board
for (var i =0; i < squares.length; i++)
{
    squares[i].addEventListener("click", buttonClick);
}

// Clear all the play spaces in the board
function clearBoard(){
    console.log("Game Reset")
}


// Setup click handlers for each play space on the board
document.getElementById("");


// Handle a play space being clicked
function buttonClick() {
    console.log("box clicked");

}

// Switch player turn




// Check for winner or CAT/tie
function winner() {
alert("YOU WIN")
}
function CAT() {
alert("TIE")
}
