let stopwatch;
let startTime;
let running = false;
let lapCounter = 1;

function startStop() {
    if (running) {
        clearInterval(stopwatch);
        running = false;
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (lapCounter > 1 ? lapCounter * 1000 : 0);
        stopwatch = setInterval(updateDisplay, 10);
        running = true;
        document.getElementById("startStop").textContent = "Stop";
    }
}

function reset() {
    clearInterval(stopwatch);
    running = false;
    lapCounter = 1;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    document.getElementById("startStop").textContent = "Start";
}

function lap() {
    if (running) {
        const currentTime = Date.now() - startTime;
        const formattedTime = formatTime(currentTime);
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCounter}: ${formattedTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    document.getElementById("display").textContent = formatTime(currentTime);
}
function formatTime(time) {
    const date = new Date(time);
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    let milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
}


