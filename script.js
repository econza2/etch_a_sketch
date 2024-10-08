const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");

const promptButton = document.querySelector(".prompt-button");
const darkButton = document.querySelector(".dark-button");

function removeExistingDivs () {
    mainContainer.innerHTML = "";

}


promptButton.addEventListener("click", () => {
    let squareNumber = parseInt(prompt("Enter the number of squares"));
    
    

    if(isNaN(squareNumber)) {
        alert("You have entered an invalid number");
        squareNumber = 0;
    }
    else if (squareNumber > 100) {
        alert("Enter a value below 100");
        squareNumber = 0;
    }

    
    for(let i=0; i < (squareNumber * squareNumber); i++){
        const insideDiv = document.createElement("div");
        insideDiv.classList.add("inside");

        let divWidth = Math.floor(1000/squareNumber);

        insideDiv.style.width = divWidth + "px";
        insideDiv.style.height = divWidth + "px";
        
        mainContainer.style.width = (divWidth * squareNumber) + "px";
        mainContainer.style.height = (divWidth * squareNumber) + "px";
        mainContainer.appendChild(insideDiv);
        
        insideDiv.addEventListener("mouseenter", () => {
        insideDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        });
    }
});




darkButton.addEventListener("click", () => {
    let squareNumberDark = parseInt(prompt("Enter the number of squares"));
    
    

    if(isNaN(squareNumberDark)) {
        alert("You have entered an invalid number");
        squareNumberDark = 0;
    }
    else if (squareNumberDark > 100) {
        alert("Enter a value below 100");
        squareNumberDark = 0;
    }



    let count = 0;
    
    for(let i=0; i < (squareNumberDark * squareNumberDark); i++){
        const insideDiv = document.createElement("div");
        insideDiv.classList.add("inside");

        let divWidth = Math.floor(1000/squareNumberDark);

        insideDiv.style.width = divWidth + "px";
        insideDiv.style.height = divWidth + "px";
        
        mainContainer.style.width = (divWidth * squareNumberDark) + "px";
        mainContainer.style.height = (divWidth * squareNumberDark) + "px";
        mainContainer.appendChild(insideDiv);

        let allInsideDivs = mainContainer.children;
        
            
    
           
        
        insideDiv.addEventListener("mouseenter", () => {
                count++;
                insideDiv.style.backgroundColor = `rgba(0, 0, 0)`;
                let divOpacity;
                
                
                if (count < 10){
                    divOpacity = count * 0.1;
                    insideDiv.style.opacity = divOpacity; 
                }
                else {
                    insideDiv.style.opacity = "1";
                }
            });
    }
});








