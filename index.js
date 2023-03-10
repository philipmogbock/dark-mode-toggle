const inputEl = document.querySelector(".input");
const bodyEl =document.querySelector("body");

// get last value of input and make it a boolean
inputEl.checked =JSON.parse(localStorage.getItem("mode"));
// console.log(inputEl.checked); 

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background= "black";
    }

    else{
        bodyEl.style.background = "white";
    }
    
}



inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage();
})



function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

