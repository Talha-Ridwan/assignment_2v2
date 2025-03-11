const start = document.querySelector(".buttons button:nth-child(1)");
const stop = document.querySelector(".buttons button:nth-child(2)");
const reset = document.querySelector(".buttons button:nth-child(3)");
const timerDisplay = document.getElementById("timer");

let timer = 0;
let interval = null;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            if (timer < 30) {
                timer += 3;
                timerDisplay.textContent = timer;
            } else {
                clearInterval(interval);
                isRunning = false;
            }
        }, 3000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    timer = 0;
    timerDisplay.textContent = timer;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
