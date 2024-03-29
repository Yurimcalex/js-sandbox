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