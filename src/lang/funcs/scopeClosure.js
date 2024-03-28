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


// Task 5 - function in if
{

	let phrase = "Hello";

	if (true) {
	  let user = "John";
	  function sayHi() {
	    alert(`${phrase}, ${user}`);
	  }
	}

	//sayHi();
}


// Task 6 - sum with closures
function sum(a) {
	return function (b) {
		return a + b;
	}
}

console.log(sum(1)(2), sum(5)(-1));


// Task 7 - is variable visible
let x = 1;

function func() {
	console.log(x);
	let x = 2;
}

//func();


// Task 8 - filter through function
function inBetween(a, b) {
	return function (n) {
		return a <= n && n <= b;
	}
}

function inArray(arr) {
	return function (n) {
		return arr.includes(n);
	}
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));