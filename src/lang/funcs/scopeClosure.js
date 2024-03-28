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


// Task 1 - does a function pickup latest changes
let name = 'Ithan';
function sayHi() {
	console.log('Hi, ' + name);
}
name = 'Patrik';
sayHi();


// Task 2 - Which variables are available
{
	function makeWorker() {
		let name = 'Boris';
		return function () {
			console.log(name);
		};
	}

	let name = 'Ivi';
	let work = makeWorker();
	work();
}


// Task 3 - are counters independent
{
	function makeCounter() {
		let count = 0;
		return function () {
			return count++;
		}
	}

	let counter1 = makeCounter();
	let counter2 = makeCounter();

	console.log(counter1(), counter1());
	console.log(counter2(), counter2());
}


// Task 4 - counter object
function Counter() {
	let count = 0;
	this.up = function () {
		return ++count;
	};
	this.down = function () {
		return --count;
	}
}

let counter = new Counter();
console.log(counter.up(), counter.up(), counter.down());