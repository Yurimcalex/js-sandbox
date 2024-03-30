// Losing this
let user = {
	name: 'Silva',
	sayHi() { console.log(`Hi, ${this.name}`); }
};

setTimeout(user.sayHi, 1000);

// Solution 1: a wrapper
setTimeout(() => user.sayHi(), 1000);
// user = {
// 	sayHi() { console.log('Something else') }
// };

// Solution 2: bind
let sayHi = user.sayHi.bind(user);
user = {
	sayHi() { console.log('Something else') }
};
setTimeout(sayHi, 1000);

let sayPhrase = function (phrase) {
	console.log(`${this.name}: ${phrase}`)
};

let player = {
	name: 'Paul'
};

player.sayPhrase = sayPhrase.bind(player);
let f = player.sayPhrase;

setTimeout(() => f('Hello'), 1000);

// Partial functions
function mul(a, b) {
	return a * b;
}

let double = mul.bind(null, 2);
console.log(double(8), double(3));

// Going partial without context
function partial(f, ...argsBound) {
	return function(...args) {
		return f.call(this, ...argsBound, ...args);
	}
}

let man = {
	name: 'Dilan',
	say(time, phrase) {
		console.log(`[${time}]: ${this.name} - ${phrase}`);
	}
};

man.sayNow = partial(man.say, new Date().getHours() + ':' + new Date().getMinutes());
man.sayNow('Greeting!');


// Task 1 - bound function as a method
{
	function f() { console.log(this) }
	let user = { g: f.bind(null) };
	user.g();
}


// Task 2 - second bind
{
	function f() {
		console.log(this.name);
	}
	f = f.bind({ name: 'Bob' }).bind({ name: 'Alie' });
	f();
}


// Task 3 - function property after bind
{
	function sayHi() {
		console.log(this.name);
	}
	sayHi.x = 100;
	let bound = sayHi.bind({ name: 'Lola' });
	console.log(bound.x);
}


// Task 4 - fix a function that loses this
{
	function askPassword(ok, fail) {
	  let password = prompt("Password?", '');
	  if (password == "rockstar") ok();
	  else fail();
	}

	let user = {
	  name: 'John',

	  loginOk() {
	    alert(`${this.name} logged in`);
	  },

	  loginFail() {
	    alert(`${this.name} failed to log in`);
	  },

	};

	askPassword(
		user.loginOk.bind(user),
		user.loginFail.bind(user)
	);
}