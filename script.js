function createGrid(rows,columns){
    const container = document.querySelector(".grid-container");

    


    for(let i = 0; i<(rows*columns); i++){
        const item = document.createElement("div");
        item.classList.add("grid-item");

        container.appendChild(item);

    }
}



createGrid(16,16);