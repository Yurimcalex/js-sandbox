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