const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers(){
    numberList.textContent = "";

    for (let i = 1; i <= 5; i++){
        const item = document.createElement("li");
        item.textContent = "The number is " + i;
        numberList.appendChild(item);
    }
}

generateBtn.addEventListener("click", generateNumbers);