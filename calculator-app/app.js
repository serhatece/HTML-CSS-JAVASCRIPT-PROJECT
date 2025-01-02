let isEqualPressed = false;

const buttonInputs = document.querySelectorAll(".input-button");
const inputField = document.getElementById("input");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const eraseButton = document.getElementById("erase");
const darkSwitch = document.getElementById("dark-switch");

const root = document.querySelector(":root");

window.onload = () => {
  inputField.value = "";
};

// Girdiye buton tıklamalarını işleme
buttonInputs.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "=") return;

    if (isEqualPressed) {
      inputField.value = "";
      isEqualPressed = false;
    }
    inputField.value += button.value;
  });
});

// Eşittir butonuna tıklandığında işlemi çözümle
equalButton.addEventListener("click", () => {
  isEqualPressed = true;
  const inputValue = inputField.value.trim();

  console.log("Girdi Değeri:", inputValue);

  if (!inputValue) {
    inputField.value = "0";
    return;
  }

  // Geçersiz karakter veya operatör kullanımını kontrol et
  if (!/^[0-9+\-*/.()]*$/.test(inputValue) || /[\+\-\*\/]{2,}/.test(inputValue)) {
    console.log("Geçersiz Girdi Tespit Edildi:", inputValue);
    inputField.value = "Invalid Input";
    return;
  }

  try {
    const solution = Function('"use strict"; return (' + inputValue + ')')();
    inputField.value = Number.isInteger(solution) ? solution : solution.toFixed(2);
  } catch (err) {
    console.error("Hata:", err.message);
    inputField.value = "Invalid Input";
  }
});

// Girdiyi temizle
clearButton.addEventListener("click", clearInput);

// Tek karakter sil
eraseButton.addEventListener("click", eraseLastCharacter);

// Tema değiştirme
if (darkSwitch) {
  darkSwitch.addEventListener("change", toggleTheme);
}

// Fonksiyonlar
function clearInput() {
  inputField.value = "";
}

function eraseLastCharacter() {
  inputField.value = inputField.value.slice(0, -1);
}

function toggleTheme() {
  const isDarkMode = darkSwitch.checked;
  root.style.setProperty("--modeBG", isDarkMode ? "var(--darkBG)" : "var(--lightBG)");
  root.style.setProperty("--modeColor", isDarkMode ? "var(--darkColor)" : "var(--lightColor)");
}
