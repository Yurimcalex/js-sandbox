// Object.prototype
let obj = {};
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === Object.prototype.toString);

console.log(Object.prototype.__proto__);

// Other built-in prototypes
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

function f() {}
console.log(f.__proto__ === Function.prototype);

// Changing native prototypes
String.prototype.show = function () {
	console.log(this);
};

'Wow!!!'.show();

if (!String.prototype.repeat) {
	String.prototype.repeat = function (n) {
		return new Array(n + 1).join(this);
	};
}

console.log('ball'.repeat(3));

// Borrowing from prototypes
let obj1 = {
	0: 'Opa',
	1: 'Opapa',
	length: 2
};

obj1.join = Array.prototype.join;
console.log(obj1.join('-'));


// Task 1 - add method f.defer(ms) to functions
Function.prototype.defer = function (ms) {
	setTimeout(() => this(), ms);
};

function f() {
	console.log('tada!');
}

f.defer(1000);


// Task 2 - add the decorating defer to functions
function g(a, b) {
	console.log(a, b);
}

Function.prototype.defer1 = function (ms) {
	return (...args) => {
		setTimeout(() => this.apply(this, args), ms);
	};
};

g.defer1(2000)(1, 2);