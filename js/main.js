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

// function DisplayCurrentTime() {
//   var date = new Date();
//   var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//   var minutes =
//     date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//   var suffix = 'AM';
//   if (hours >= 12) {
//     suffix = 'PM';
//     hours = hours - 12;
//   }
//   if (hours == 0) {
//     hours = 12;
//   }

//   time = hours + ':' + minutes + ' ' + suffix;
//   var timeEl = document.getElementById('timeEl');
//   timeEl.innerHTML = time;

//   setTimeout(DisplayCurrentTime, 1000);
// }

// On click remove text from screen //
let gotIt = document.getElementById('got-it');
