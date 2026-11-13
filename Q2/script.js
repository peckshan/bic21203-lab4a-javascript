const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput(){
    const input = userInput.value.trim();

    if (input === ""){
        result.textContent = "Please enter a valid number!";
    }
    else if (!Number.isFinite(Number(input))){
        result.textContent = "Please enter a valid number!";   
    }
    else if (Number(input) < 10){
        result.textContent = "The number is lower than 10";
    }
    else if (Number(input) > 10){
        result.textContent = "The number is higher than 10";
    }
    else{
        result.textContent = "The number is equal to 10";
    }
}

checkBtn.addEventListener("click", checkInput);