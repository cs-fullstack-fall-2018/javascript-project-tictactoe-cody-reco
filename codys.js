// function buttonClick(){
//     console.log("button clicked");
//  //   document.getElementById().innerText="X"
// }
var squares= document.querySelectorAll(".tsquare");

console.log("squares.length " +squares.length);

for (var i =0; i < squares.length; i++)
{
    squares[i].addEventListener("click", buttonClick);
}

function buttonClick() {
    console.log("box clicked");
    }