function createGrid(rows,columns){
    for(let i = 0; i<(rows*columns); i++){
        const item = document.createElement("div");
        item.classList.add("grid-item");
        item.style.cssText = "background-color: rgb(255,255,255);";

        container.appendChild(item);

        container.style.cssText = "grid-template-columns: repeat("+columns+ ","+columns+"fr); grid-template-rows: repeat("+rows+","+rows+"fr);";

    }
}

function deleteGrid(){
    var item = container.lastElementChild;

    while(item){
        container.removeChild(item);
        item = container.lastElementChild;
    }
}

function randRGB(){
    let rgb = [];

    for(let i = 0; i<3; i++){
        let value = Math.round(Math.random()*255);
        rgb.push(value);
    }

    return(rgb.join());
}

function shadeRGB(style){
    let left = style.indexOf("(");
    let right = style.indexOf(")");
    let rgb = style.substring(left+1,right);
    let values = rgb.split(",").map(Number);
        
    

    values.forEach((value, index, values) => {
        if(values[index]>=25){
            values[index] -= 25;
        } else {
            values[index] = 0;
        }
        
    });
    return(values.join());

}

function shade(event){
    let style = this.style.cssText;
    shadeRGB(style);
    this.style.cssText = "background-color: rgb("+shadeRGB(style)+");";
}

function black(event){
    this.style.cssText = "background-color: rgb(0,0,0);";
}

function random(event){
    this.style.cssText = "background-color: rgb("+randRGB()+");";
}

function erase(event){
    this.style.cssText = "background-color: rgb(255,255,255);";
}

function addListeners(grid,effect){
    grid.forEach( (item) => {
        item.addEventListener('mouseover', effect);
    });
}

function removeListeners(grid,effect){
    grid.forEach( (item) => {
        item.removeEventListener('mouseover', effect);
    });
}

function newSketchPad(event){
    let rows = prompt("How many rows?");
    let columns = prompt("How many columns?");

    deleteGrid();
    createGrid(rows,columns);
    grid = document.querySelectorAll("div.grid-item"); //update grid, not "live"
    addListeners(grid,drawState); 
}

function replaceListeners(event){
    removeListeners(grid,drawState);
    let button = this.classList.item(0);
    switch(true){
        case (button =="black"):
            addListeners(grid,black);
            drawState = black;
            break;
        case (button =="shade"):
            addListeners(grid,shade);
            drawState = shade;
            break;
        case (button == "random"):
            addListeners(grid,random);
            drawState = random;
            break;
        case (button == "erase"):
            addListeners(grid,erase);
            drawState = erase;
            break;
    }
    
}


const container = document.querySelector(".grid-container");
createGrid(16,16);

var grid = document.querySelectorAll("div.grid-item")
addListeners(grid,black);

var drawState = black;

var resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', newSketchPad);

var blackButton = document.querySelector('.black');
blackButton.addEventListener('click', replaceListeners);

var shadeButton = document.querySelector('.shade');
shadeButton.addEventListener('click', replaceListeners);

var randomButton = document.querySelector('.random');
randomButton.addEventListener('click', replaceListeners);

var eraseButton = document.querySelector('.erase');
eraseButton.addEventListener('click', replaceListeners);