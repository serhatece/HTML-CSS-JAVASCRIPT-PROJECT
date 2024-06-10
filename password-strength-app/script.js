var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");
let eyeicon = document.getElementById("eyeicon");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    const strength = checkPasswordStrength(pass.value);
    if (strength === 'weak') {
        str.textContent = "weak";
        pass.style.borderColor = "#ff5925";
        msg.className = 'weak';
    } else if (strength === 'medium') {
        str.textContent = "medium";
        pass.style.borderColor = "yellow";
        msg.className = 'medium';
    } else if (strength === 'strong') {
        str.textContent = "strong";
        pass.style.borderColor = "#26d730";
        msg.className = 'strong';
    }
});

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    if (strength <= 2) {
        return 'weak';
    } else if (strength === 3 || strength === 4) {
        return 'medium';
    } else if (strength === 5) {
        return 'strong';
    }
}

eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "img/eye-open.png";
    } else {
        password.type = "password";
        eyeicon.src = "img/eye-close.png";
    }
}