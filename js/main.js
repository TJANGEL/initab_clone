window.onload = function() {
  DisplayCurrentTime();
  DisplayCurrentDate();
};

// CLOCK //
var timeEl = document.getElementById('timeEl');

function DisplayCurrentTime() {
  let now = moment().format('LT');

  timeEl.textContent = now;
}

setInterval(DisplayCurrentTime, 1000);

// DATE //
var dateEl = document.getElementById('dateEl');

function DisplayCurrentDate() {
  let now = moment().format('ll');

  dateEl.textContent = now;
}

setInterval(DisplayCurrentDate, 1000);

// On click remove text from screen //
let gotIt = document.getElementById('got-it');
