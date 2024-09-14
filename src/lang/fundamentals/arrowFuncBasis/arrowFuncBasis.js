let age = 18;
let welcome = (age > 18) ?
	() => console.log('Hello!') :
	() => console.log('Hi!');

welcome();


let sum = (a, b) => {
	let result = a + b;
	return result;
}

console.log(sum(3, 4));
// --------- block ---------


// task
function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

ask(
	'Do you have a cat?',
	() => console.log('Miaw!'),
	() => console.log('But why?')
);