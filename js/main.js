// Date //
// var d = new Date(hours, minutes);

// document.getElementById('datetime').innerHTML = d.toLocaleString();

// CLOCK //
function updateClock() {
  var now = new Date(), // current date
  months = ['January', 'February', '...']; // you get the idea
  (time = now.getHours() + ':' + now.getMinutes()), // again, you get the idea
    // a cleaner way than string concatenation
  (date = [now.getDate(), months[now.getMonth()], now.getFullYear()].join(
      ' '
));

  // set the content of the element with the ID time to the formatted string
  document.getElementById('datetime').innerHTML = [time];

  // call this function again in 1000ms
  setTimeout(updateClock, 1000);
}
updateClock(); // initial call

//////////////////////////////
// window.onload = function() {
//   DisplayCurrentTime();
// };
// function DisplayCurrentTime() {
//   var date = new Date();
//   var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//   var minutes =
//     date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//   var seconds =
//     date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//   time = hours + ':' + minutes + ':' + seconds;
//   var timeEl = document.getElementById('timeEl');
//   timeEl.innerHTML = time;

//   setTimeout(DisplayCurrentTime, 1000);
// }

//////////////////////////
function DisplayCurrentTime() {
  var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  var suffix = 'AM';
  if (hours >= 12) {
    suffix = 'PM';
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  document.getElementById('timeEl') = [
    hours + ':' + minutes + ' ' + suffix
  ];

  timeEl.innerHTML = currentTime;

  setTimeout(DisplayCurrentTime, 1000);
}

// On click remove text from screen //
let gotIt = document.getElementById('got-it');

// function display_ct() {
//   var d = new Date();
//   var d1 = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getYear();
//   d1 = d1 + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
//   document.getElementById('datetime').innerHTML = d1;
//   display_c();
// }

// var d, h, m, s, animate;

// function init() {
//   d = new Date();
//   h = d.getHours();
//   m = d.getMinutes();
//   s = d.getSeconds();
//   clock();
// }

// function clock() {
//   s++;
//   if (s == 60) {
//     s = 0;
//     m++;
//     if (m == 60) {
//       m = 0;
//       h++;
//       if (h == 24) {
//         h = 0;
//       }
//     }
//   }
//   $('sec', s);
//   $('min', m);
//   $('hr', h);
//   animate = setTimeout(clock, 1000);
// }

// function $(id, val) {
//   if (val < 10) {
//     val = '0' + val;
//   }
//   document.getElementById(id).innerHTML = val;
// }

// window.onload = init;
