let drawColor = 'black'
let colorModeCheck = true;
let rgbModeCheck = false; 
let shadowModeCheck = false; 
function drawOn(e){
    const gridSquare = document.querySelector(`#${e.target.id}`)
    if(rgbModeCheck){
       
        let newColor = genRandomColor();
        gridSquare.setAttribute('style', `background-color: rgb(${newColor[0]},${newColor[1]},${newColor[2]},1)`);
    }else if(shadowModeCheck){

        console.log(getComputedStyle(gridSquare).getPropertyValue("background-color"));
            let currentVisibility = parseFloat(getComputedStyle(gridSquare).getPropertyValue('background-color').split(',')[3]);
            console.log(currentVisibility)
            if(currentVisibility <= 0.9){
                gridSquare.setAttribute('style',`background-color:rgb(0,0,0,${currentVisibility+=0.1})`);
            }else{ 
                gridSquare.setAttribute('style',`background-color:rgb(0,0,0,1)`);
            }

    }else if(colorModeCheck){
        
        gridSquare.setAttribute('style',`background-color:${drawColor}`)
    }
}


function resizeGrid(e){
    const newGrid = document.querySelector("#myRange");

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(square => square.remove())
    createGrid(newGrid.value,newGrid.value);
}
function setColor(e){
    const newColor = document.querySelector('#colorChoice');
    drawColor = newColor.value
}


function genRandomColor(){
    let  red = Math.floor(Math.random()*(255+1));
    let  green = Math.floor(Math.random()*(255+1));
    let  blue = Math.floor(Math.random()*(255+1));
    return [red,green,blue];
}
function setColorMode(e){
    colorModeCheck = true; 
    rgbModeCheck = false;
    shadowModeCheck = false; 
}

function setRGBMode(e){
    colorModeCheck = false; 
    rgbModeCheck = true;
    shadowModeCheck = false; 
}


function setShadowMode(e){
    colorModeCheck = false; 
    rgbModeCheck = false;
    shadowModeCheck = true; 
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


const resizeRange = document.querySelector('#myRange');
resizeRange.addEventListener('mouseup',resizeGrid);

const colorMode = document.querySelector("#color-mode");
colorMode.addEventListener('click',setColorMode);

const rgbMode = document.querySelector("#RGB-mode");
rgbMode.addEventListener('click',setRGBMode);

const shadowMode = document.querySelector('#shadow-mode');
shadowMode.addEventListener('click',setShadowMode);

const colorPicker = document.querySelector('#colorChoice');
colorPicker.addEventListener('change',setColor);