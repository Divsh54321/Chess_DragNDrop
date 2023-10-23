const king = document.querySelector(".chess-piece");
const square = document.querySelectorAll(".square");

let beingDragged

king.addEventListener("dragstart", function (e) {
    beingDragged = e.target
})
for (var i = 0; i < square.length; i++)
{
    var squares = square[i];
    squares.addEventListener("dragover", function (e) {
        e.preventDefault(); 
        
    })
    squares.addEventListener("drop", function (e) {
        e.target.append(beingDragged)
    })
    }

