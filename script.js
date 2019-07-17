function createGrid(rows,columns){
    for(let i = 0; i<(rows*columns); i++){
        const item = document.createElement("div");
        item.classList.add("grid-item");
        //item.id.add(i);

        container.appendChild(item);

    }
}

function draw(event){
    this.style.cssText = "background-color: black";

}

function addListeners(grid,effect){
    grid.forEach( (item) => {
        item.addEventListener('mouseover', effect);
    });
}


const container = document.querySelector(".grid-container");
createGrid(16,16);

var grid = document.querySelectorAll("div.grid-item")
addListeners(grid,draw);
