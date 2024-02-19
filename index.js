const firstName = prompt("Write your name here");
const lastName = prompt("Write your surname here");
const color = prompt("What's your favorite color?");
console.log(firstName, lastName, color);
const password = firstName + lastName + color + 24;
console.log(password);
document.getElementById('code').innerHTML = password;