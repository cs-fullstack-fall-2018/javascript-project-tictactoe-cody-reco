// Setup your Variables
var squares= document.querySelectorAll(".tsquare");
var turns=1;
var cats=0
// Handle Restart game button
var reset = document.getElementById("idStartButton");
reset.addEventListener("click",buttonClick);

// Grab all the play spaces in the board
for (var i =0; i < squares.length; i++)
{
    squares[i].addEventListener("click", buttonClick);
}

// Clear all the play spaces in the board
function clearBoard(){

}


// Setup click handlers for each play space on the board
document.getElementById("");


for (var x =0; x < squares.length; x++)
{
    squares[x].addEventListener("click", buttonClick);
}
// Handle a play space being clicked
function buttonClick() {
    console.log(turns);
    switches(this);
    turns++;
    cats++;
}

// Switch player turn
function switches(item) {
    console.log(turns%2);
    if (turns % 2 === 1) {
        item.innerText="X"
    }
    else if (turns%2===0){
        item.innerText="O"
    }
    

// Check for winner or CAT/tie
function winner() {
    alert("YOU WIN")
}
function CAT() {
alert("TIE")
}
