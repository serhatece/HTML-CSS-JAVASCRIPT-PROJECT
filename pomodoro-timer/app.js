let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let resetBtn = document.getElementById("btn-reset");
let startBtn = document.getElementById("btn-start");
let pauseBtn = document.getElementById("btn-pause");
let time = document.getElementById("time");

let set; // Timer ID
let count = 59;
let paused = true; // Timer'ın durumu
let mincount = 24; // Dakika sayısı
time.textContent = `${mincount + 1}:00`;

// Dakika ve saniyeleri sıfırla doldurmak için yardımcı fonksiyon
const appendZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

// Timer'ı sıfırlama fonksiyonu
const resetTimer = () => {
  pauseTimer();
  mincount = 24;
  count = 59;
  time.textContent = `${mincount + 1}:00`;
};

// Timer'ı durdurma fonksiyonu
const pauseTimer = () => {
  clearInterval(set);
  paused = true;
  startBtn.classList.remove("hide");
  pauseBtn.classList.add("show");
  resetBtn.classList.remove("show");
};

// Timer'ı başlatma fonksiyonu
const startTimer = () => {
  resetBtn.classList.add("show");
  pauseBtn.classList.remove("show");
  startBtn.classList.add("hide");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(mincount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(mincount)}:${appendZero(count)}`;
      if (count === 0) {
        if (mincount !== 0) {
          mincount--;
          count = 60;
        } else {
          clearInterval(set); // Timer bitince durdur
        }
      }
    }, 1000);
  }
};

// Aktif butonun vurgusunu kaldır
const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

// Odaklanma butonu
focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focus");
  pauseTimer();
  mincount = 24;
  count = 59;
  time.textContent = `${mincount + 1}:00`;
});

// Kısa mola butonu
shortBreakButton.addEventListener("click", () => {
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  mincount = 4;
  count = 59;
  time.textContent = `${appendZero(mincount + 1)}:00`;
});

// Uzun mola butonu
longBreakButton.addEventListener("click", () => {
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  mincount = 14;
  count = 59;
  time.textContent = `${mincount + 1}:00`;
});

// Başlat butonu
startBtn.addEventListener("click", startTimer);

// Durdur butonu
pauseBtn.addEventListener("click", pauseTimer);

// Sıfırla butonu
resetBtn.addEventListener("click", resetTimer);
