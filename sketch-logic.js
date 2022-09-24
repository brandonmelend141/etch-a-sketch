function drawOn(e){
    const gridSquare = document.querySelector(`#${e.target.id}`)
    gridSquare.classList.add('grid-item-draw'); 
}
function drawOnHoverRGB(e){
    let newColor = genRandomColor();
    const gridSquare = document.querySelector(`#${e.target.id}`);
    gridSquare.classList.add('grid-item-draw');
    gridSquare.setAttribute('style', `background-color: rgb(${newColor[0]},${newColor[1]},${newColor[2]})`);
}
function resizeGrid(e){
    let newGrid = prompt("Enter a number between 0-100");

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(square => square.remove())
    
    createGrid(newGrid,newGrid);
}

function genRandomColor(){
    let  red = Math.floor(Math.random()*(255+1));
    let  green = Math.floor(Math.random()*(255+1));
    let  blue = Math.floor(Math.random()*(255+1));
    return [red,green,blue];
}

function setRGBMode(e){
    const sketchSquares = document.querySelectorAll('.grid-item');
    sketchSquares.forEach(square => square.removeEventListener('mouseover',drawOn));
    sketchSquares.forEach(square => square.addEventListener('mouseover',drawOnHoverRGB))
}
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
   const sketchSquares = document.querySelectorAll('.grid-item');
   sketchSquares.forEach(square => square.addEventListener('mouseover',drawOn));
}

createGrid(16,16);


const resizeButton = document.querySelector('#update-grid');
resizeButton.addEventListener('click',resizeGrid);

const rgbMode = document.querySelector("#RGB-mode");
rgbMode.addEventListener('click',setRGBMode);