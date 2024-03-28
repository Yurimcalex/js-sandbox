// Code blocks
{
	let a = 1;
	console.log(a);
}

{
	let a = 10;
	console.log(a);
}

if (true) {
	let a = 100;
	let b = 1000;
	console.log(a, b);
}

for (let a = 0; a < 2; a += 1) {
	let b = a + 1;
	console.log(a + b);
}

// Nested functions
function greeting(fname, lname) {
	console.log('Hi ' + getFullName() + '!');
	function getFullName() {
		return `${fname} ${lname}`;
	}
}

greeting('John', 'Silva');

{
	function makeCounter() {
		let count = 0;
		return function () { return count++; };
	}

	function f() {
		let counter = makeCounter();
		console.log(counter(), counter(), counter());
	}

	f();
}