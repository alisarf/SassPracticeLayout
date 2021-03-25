const username = 'Alisar'

/*
//General greeting 
let message = 'Welcome '
let greeting2 = message + username + '!'


var el = document.getElementById('greeting2-text')
el.textContent = greeting2;
*/


//Time dependendent Greeting
let today = new Date();
let hourNow = today.getHours();
let greeting3;

if (hourNow > 18) {
    greeting3 = 'Good Evening ' + username + '!';
} else if (hourNow > 12) {
    greeting3 = 'Good Afternoon ' + username + '!';
} else if (hourNow > 0 ) {
    greeting3 = `Good Morning ${username}!`;
} else {
    greeting3 = 'Welcome ' + username + '!';
};

let dayNames, day, monthNames, month;
dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday' , 'Thursday', 'Friday', 'Saturday'];
day = dayNames[today.getDay()];
monthNames = ['January', 'February', 'March', 'April', 'May',
    'June','July', 'August', 'September', 'October', 'November', 'December']
month = monthNames[today.getMonth()];
todayDate = today.getDay()

var el = document.getElementById('greeting-text')
el.textContent = greeting3;

var el = document.getElementById('dayOfWeek');
el.innerHTML = '<b>Today is </b>' + day + ' ' + month + ' ' + todayDate + '.';

let year = today.getFullYear()

var el = document.getElementById('copyright');
el.innerHTML = 'Copyright &copy; ' + year;