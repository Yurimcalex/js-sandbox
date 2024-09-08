// Currying
function curry(f) {
	return function (a) {
		return function (b) {
			return f(a, b);
		}
	}
}

function sum(a, b) {
	return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));


// Currying? What for?
function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

function curry3(f) {
	return function (a) {
		return function (b) {
			return function (c) {
				return f(a, b, c);
			}
		}
	}
}

let curriedLog = curry3(log);
log(new Date(), 'OPAPA', 'Cooooooooooooool!!!');
curriedLog(new Date())('Message')('Hi!');

let logNow = curriedLog(new Date());
logNow('TEXT')('Ouuum');
logNow('TEXT')('UUUUrrraaaaaaa');

let textNow = logNow('Text');
textNow('Greeting!');
textNow('Hi everyone!');


// Advanced curry implementation
{
	function curry(func) {
		return function curried(...args) {
			if (args.length >= func.length) {
				return func.apply(this, args);
			} else {
				return function (...args2) {
					return curried.apply(this, args.concat(args2));
				}
			}
		}
	}

	function sum(a, b, c) {
		return a + b + c;
	}

	let curriedSum = curry(sum);
	console.log(curriedSum(1, 2, 3));
	console.log(curriedSum(1)(2, 3));
	console.log(curriedSum(1)(2)(3));
}
