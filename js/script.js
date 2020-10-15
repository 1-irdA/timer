const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const resume = document.getElementById('resume');
const lapBtn = document.getElementById('lap');
const time = document.getElementById('clock');
const allLaps = document.getElementById('allLaps');

let elapsedTime = 0;
let stop;

let hours, minutes, seconds;
let displayHours, displayMinutes, displaySeconds;

let countLap = 1;

stopBtn.style.backgroundColor = 'rgb(255,0,0)';
startBtn.style.backgroundColor = 'rgb(0,255,0)';
resetBtn.style.backgroundColor = 'rgb(0,0,255)';
resume.style.backgroundColor = 'rgb(106,161,161)';
lapBtn.style.backgroundColor = 'rgb(55,56,56)';

/* start the timer */
startBtn.addEventListener('click', () => {
    stop = setInterval(count,1000);
    startBtn.hidden = true;
    stopBtn.hidden = false;
    lapBtn.hidden = false;
});

/* stop the timer */
stopBtn.addEventListener('click', () => {
    clearInterval(stop);
    stopBtn.hidden = true;
    resetBtn.hidden = false;
    resume.hidden = false;
    lapBtn.hidden = true;
});

/* create a lap of timer */
lapBtn.addEventListener('click', () => {
  let lapP = document.createElement('p');
  lapP.textContent = countLap + '. ' + displayHours + ':' + displayMinutes + ':' + displaySeconds;
  allLaps.appendChild(lapP);
  countLap++;
});

/* take over the timer */
resume.addEventListener('click', () => {
  stop = setInterval(count,1000);
  resetBtn.hidden = true;
  resume.hidden = true;
  stopBtn.hidden = false;
  lapBtn.hidden = false;
});

/* reset the timer */
resetBtn.addEventListener('click', () => {
  clearInterval(stop);
  startBtn.hidden = false;
  resetBtn.hidden = true;
  resume.hidden = true;
  elapsedTime = 0;
  allLaps.innerHTML = '';
  countLap = 1;
  count();
});

/* display time */
function count() {

  hours = Math.floor(elapsedTime / 3600);
  minutes = Math.floor((elapsedTime % 3600) / 60);
  seconds = Math.floor(elapsedTime % 60);

  displayHours = (hours < 10) ? '0' + hours : hours;
  displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

  time.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

  elapsedTime++;
}

/* display time when web page is loaded */
count();
