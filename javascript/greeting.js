//General greeting
const username = 'Alisar' 
let message = 'Welcome '
let greeting2 = message + username + '!'


var el = document.getElementById('article-1-text')
el.textContent = greeting2;


//Time dependendent Greeting
let today = new Date();
let hourNow = today.getHours()
let greeting;

if (hourNow > 18) {
    greeting = 'Good Evening ' + username + '!'
} else if (hourNow > 12) {
    geeting = 'Good Afternoon ' + username + '!'
} else if (hourNow > 0 ) {
    greeting = 'Good Morning ' + username + '!'
} else {
    greeting = 'Welcome ' + username + '!'
}

var el = document.getElementById('article-2-text')
el.textContent = greeting;