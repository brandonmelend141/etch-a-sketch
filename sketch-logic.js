const sketchContainer = document.querySelector(".sketch-container");
function createGrid(col,row){
   sketchContainer.style.setProperty('--grid-cols',col);
   sketchContainer.style.setProperty('--grid-rows',row);
   for(let i = 0;i<(col*row);i++){
        let cell = document.createElement("div");
        cell.setAttribute("id",`s${i}`);
        cell.classList.add('grid-item');
        sketchContainer.appendChild(cell);
   }
}

createGrid(16,16);

function drawOnHover(e){
    const gridSquare = document.querySelector(`#${e.target.id}`)
    gridSquare.classList.add('grid-item-draw'); 
}

const sketchSquares = document.querySelectorAll('.grid-item');
sketchSquares.forEach(square => square.addEventListener('mouseover',drawOnHover))