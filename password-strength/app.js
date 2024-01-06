const background = document.getElementById("background");
const passwordLabel = document.getElementById("passwordLabel");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
    const length = e.target.value.length;
    const bgBlur = 20 - length * 2;
    background.style.filter = `blur(${bgBlur}px)`;

    if (length >= 10) {
        passwordLabel.style.color = 'Green';
        passwordLabel.innerHTML = 'Strong Password';
    } else {
        passwordLabel.style.color = 'Gray';
        passwordLabel.innerHTML = 'Password:'
    }
})