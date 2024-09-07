if (prompt("What's the official name of JavaScript", '')) {
	alert('Right!');
} else {
	alert(`You don't know? "ECMAScript!"`);;
}

let a = 5, b = 6;
let result = (a + b < 4) ? 'Below' : 'Over';

let login = '';
let message = 
(login === 'Employee') ? 'Hello' :
(login === 'Director') ? 'Greetings':
(login === '') ? 'No login' : '';

console.log(message);