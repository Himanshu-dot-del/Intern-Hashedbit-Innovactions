function createDiv(width, height, text) {
    let container = document.getElementById("container"); 
    let newDiv = document.createElement("div"); 

    
    newDiv.style.width = width + "px"; 
    newDiv.style.height = height + "px"; 
    newDiv.textContent = text;
    
    container.appendChild(newDiv); 
}

console.log(createDiv(100,100,"himanshu"));