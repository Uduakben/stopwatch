let [hours, minutes, seconds] = [0,0,0,];
let showTimer = document.getElementById("showTimer");
let timer = null;

function timerFunc(){
    seconds ++;
    if(seconds == 60){
        seconds = 0;
        minutes ++;
        if(minutes == 60){
            hours ++;
        }
    }
    let hr = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    showTimer.innerHTML = hr + ":" + min + ":" + sec;
}

function startTimer(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(timerFunc, 1000)
}

function stopTimer(){
    clearInterval(timer);
}
function resetTimer(){
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0,];
    showTimer.innerHTML = "00:00:00"

}




