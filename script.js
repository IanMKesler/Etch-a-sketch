function createGrid(rows,columns){
    for(let i = 0; i<(rows*columns); i++){
        const item = document.createElement("div");
        item.classList.add("grid-item");

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

function shadeRGB(){
    
}

function draw(event){

    this.style.cssText = "background-color: rgb("+randRGB()+");";

    //this.style.cssText = "background-color: rgb("+shadeRGB()+");";


    //this.style.cssText = "background-color: black";

}

function addListeners(grid,effect){
    grid.forEach( (item) => {
        item.addEventListener('mouseover', effect);
    });
}

function newSketchPad(event){
    let rows = prompt("How many rows?");
    let columns = prompt("How many columns?");

    deleteGrid();
    createGrid(rows,columns);
    grid = document.querySelectorAll("div.grid-item"); //update grid, not "live"
    addListeners(grid,draw);
}


const container = document.querySelector(".grid-container");
createGrid(16,16);

var grid = document.querySelectorAll("div.grid-item")
addListeners(grid,draw);

var reset = document.querySelector('.reset');
reset.addEventListener('click', newSketchPad);