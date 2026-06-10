let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let timer = null;

function updateDisplay(){

    let min = String(minutes).padStart(2,'0');

    let sec = String(seconds).padStart(2,'0');

    let ms = String(milliseconds).padStart(3,'0');

    document.getElementById("display").innerHTML =
    `${min} : ${sec} : ${ms}`;
}

function startTimer(){

    if(timer !== null){
        return;
    }

    timer = setInterval(function(){

        milliseconds += 10;

        if(milliseconds >= 1000){

            milliseconds = 0;

            seconds++;
        }

        if(seconds >= 60){

            seconds = 0;

            minutes++;
        }

        updateDisplay();

    },10);
}

function pauseTimer(){

    clearInterval(timer);

    timer = null;
}

function resetTimer(){

    clearInterval(timer);

    timer = null;

    milliseconds = 0;

    seconds = 0;

    minutes = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function lapTimer(){

    let lap = document.createElement("li");

    lap.textContent =
    document.getElementById("display").innerText;

    document.getElementById("laps")
    .appendChild(lap);
}
