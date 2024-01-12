const container = document.getElementById("container");

const colors = ["#e74c3c", "#8e44ad", "#3498ad", "#ebe7e22", "#2ecc71"];
const SQUARE = 600;

for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(div){
    const randomColor = getRandomColor();
    div.style.backgroundColor = randomColor;
    div.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function removeColor(div){
    div.style.backgroundColor = "#111";
    div.style.boxShadow = `0 0 2px #000`;
}