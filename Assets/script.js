// Select element id "TIMER"
var timeEl = document.getElementById("TIMER");

var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}