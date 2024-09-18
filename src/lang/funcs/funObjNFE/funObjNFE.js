console.log(typeof function () {});

// The name property
function doSomething() {}
let ds = doSomething;
console.log(doSomething.name, ds.name);

let f1 = function () {};
console.log(f1.name);

function g(f = function () {}) {
	console.log(f.name);
}

g();

let fa = [function () {}];
console.log(fa[0].name);

let city = {
	name: 'NY',
	getName: function () {}
};

console.log(city.getName.name);
// --------- block ---------


// The length property
function showSomething(first, second, ...rest) {}
console.log(showSomething.length);

function procUserInput(userInput, ...handlers) {
	for (let handler of handlers) {
		if (handler.length === 0) {
			handler();
		} else {
			handler(userInput);
		}
	}
}

procUserInput(
	1, 
	(inp) => { console.log(`You pass ${inp} and its type ${typeof inp}`) },
	() => { console.log('I am finishing the call!') }
);
// --------- block ---------


// Custom properties
function someF() { someF.counter++ }
someF.counter = 0;
someF();
someF();
someF();
console.log(someF.counter);


function makeCounter() {
	function counter() {
		return counter.count++;
	}
	counter.count = 0;
	return counter;
}

let counter = makeCounter();
console.log(counter(), counter());
// --------- block ---------


// Named function expression
let sayYes = function sy(arg) {
	if (arg) {
		console.log(`Oh ya, ${arg} - Yes!`);
	} else {
		sy('Good');
	}
}

let gf = sayYes;
sayYes = null;
gf();
// --------- block ---------


// Set and decrease for counter
function makeCounter1() {
	let count = 0;
	function counter() {
		return count++;
	}
	counter.set = function (value) {
		count = value;
	};
	counter.decrease = function () {
		count--;
	};
	return counter;
}

let counter1 = makeCounter1();
counter1.set(10);
counter1.decrease();
console.log(counter1());
// --------- block ---------


// Sum with an arbitrary amount of brackets
function sum(n) {
	sum.numbers.push(n);
	return sum;
}
sum.numbers = [];
sum.toString = function () {
	return sum.numbers.reduce((s, n) => s + n, 0);
};


function sum1(first) {
	let s = first;

	function f(n) {
		s += n;
		return f;
	}

	f.toString = function () {
		return s;
	}

	return f;
}

console.log(sum1(0)(1)(2)(3)(4)(5) == 15);