// Transparent caching
function slowCalc(arg) {
	console.log(`slowCalc called with arg ${arg}`);
	return arg;
}

function cachingDecorator(f) {
	let cache = new Map();
	return function (arg) {
		if (cache.has(arg)) return cache.get(arg);
		let res = f(arg);
		cache.set(arg, res);
		return res;
	};
}

let slowCalcWithCache = cachingDecorator(slowCalc);
slowCalcWithCache(10);
slowCalcWithCache(11);
slowCalcWithCache(10);
// --------- block ---------


// Using func.call for the context
let calculations = {
	x: 1,
	slow(y) {
		'use strict';
		console.log(`slow called with arg ${y}`);
		return this.x + y;
	}
};

//calculations.slow = cachingDecorator(calculations.slow);
//calculations.slow(15);


function sayHi() {
	console.log(`Hi, ${this.name}!`);
}

let user = { name: 'Jordge' };
let admin = { name: 'Miley' };

sayHi.call(user);
sayHi.call(admin);


function cachingDecorator1(f) {
	let cache = new Map();
	return function (arg) {
		if (cache.has(arg)) return cache.get(arg);
		let res = f.call(this, arg);
		cache.set(arg, res);
		return res;
	};
}

calculations.slow = cachingDecorator1(calculations.slow);
calculations.slow(1);
calculations.slow(2);
calculations.slow(2);
// --------- block ---------


// Going multi-argument
calculations.anotherSlow = function (a, b) {
	console.log(`anotherSlow called with ${a} and ${b}`);
	return a + b;
}


function hash(args) {
	return [].join.call(args, ...args);
}

function cachingDecorator2(f) {
	let cache = new Map();
	return function () {
		let key = hash(arguments);
		if (cache.has(key)) return cache.get(key);
		let res = f.call(this, ...arguments);
		cache.set(key, res);
		return res;
	};
}

calculations.anotherSlow = cachingDecorator2(calculations.anotherSlow);
calculations.anotherSlow(1, 2);
calculations.anotherSlow(1, 2);
calculations.anotherSlow(3, 4);
// --------- block ---------


// func.apply
let wrapper = function (f) {
	return function () {
		return f.apply(this, arguments);
	}
}

let someFunc = function (a, b, c) {
	console.log(this);
};

let o = {};
o.meth = wrapper(someFunc);
o.meth();
console.log(o);
// --------- block ---------


// Spy decorator
function sum(...args) {
	return;
}

function spy(f) {
	function fn() {
		fn.calls.push([...arguments]);
		return f.apply(this, arguments);	
	}
	fn.calls = [];
	return fn;
}

let spySum = spy(sum);
spySum(1, 2);
spySum(1, 2, 3, 4, 5);

for (let args of spySum.calls) {
	console.log('call:' + args.join());
}
// --------- block ---------


// Delaying decorator
function sayPhrase(phrase) {
	console.log(phrase);
}

function delay(f, ms) {
	return function () {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}

let sayPhrase3000 = delay(sayPhrase, 3000);
sayPhrase3000('Hey!');
// --------- block ---------


// Debounce decorator
function debounce(f, ms) {
	let callTime = 0;
	let callArgs = [];

	return function (...args) {
		let now = Date.now();
		callArgs = args;
		setTimeout(() => {
			if (now - callTime >= ms) {
				f.apply(this, callArgs);
				callTime = now;
			}
		}, ms);
	};
}


function debounce1(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}


let sayHey = function (name) {
	console.log('Hey! ' + name);
};

let shd = debounce1(sayHey, 1000);

// shd('John');
// setTimeout(() => shd('Piter'), 500);
// setTimeout(() => shd('Sam'), 1700);
// setTimeout(() => shd('Gorge'), 800);
// --------- block ---------


// Throttle decorator
function f(a) {
	console.log(a);
}

function throttle(f, ms) {
	let isThrottled = false,
	    savedArgs,
	    savedThis;

	function wrapper() {
		if (isThrottled) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}
		isThrottled = true;
		f.apply(this, arguments);

		setTimeout(function () {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, ms);
	}

	return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)