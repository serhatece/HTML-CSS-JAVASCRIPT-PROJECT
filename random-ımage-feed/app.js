const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 6;

for (let i = 0; i < rows * 2; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandSize()}`;
    container.appendChild(img)
}

function getRandNumber() {
    return Math.floor(Math.random() * 10) + 300;
}

function getRandSize() {
    return `${getRandNumber()}x${getRandNumber()}`;
}