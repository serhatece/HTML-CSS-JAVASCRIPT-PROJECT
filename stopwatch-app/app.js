const min = document.getElementById("minute")
const sec = document.getElementById("second")

// boxed
const selectMn = document.getElementById("selected-min")
const selectSc = document.getElementById("selected-sec")

// Buttons
const startBtn = document.getElementById("start")
const resetBtn = document.getElementById("reset")

let stop = false

selectMn.addEventListener("change", () => {
    min.textContent = selectMn.value < 10 ? "0" + selectMn.value : selectMn.value
})

selectSc.addEventListener("change", () => {
    sec.textContent = selectSc.value < 10 ? "0" + selectSc.value : selectSc.value
})

startBtn.addEventListener("click", startTimer)
resetBtn.addEventListener("click", () => {
    stop = true
    min.textContent = "00"
    sec.textContent = "00"
    selectMn.value = "00"
    selectSc.value = "00"

})

function startTimer() {
    let mn = min.textContent
    let sc = sec.textContent

    const interval = setInterval(() => {
        sc--
        sc = sc < 10 ? "0" + sc : sc
        if (sc == "0-1") {
            mn--
            sc = 59
        }

        if ((mn == "00" && sc == "00") || (mn == 0 && sc == 0)) {
            clearInterval(interval)
            playAlarmSound()
            selectMn.value = "00"
            selectSc.value = "00"
        }

        if (stop) {
            clearInterval(interval)
            return
        }

        min.textContent = mn
        sec.textContent = sc
    }, 1000);
}

function playAlarmSound() {
    var alarmAudio = document.getElementById('alarmSound');
    alarmAudio.play();
}