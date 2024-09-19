// The class syntax
class User {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(this.name);
	}
}

let user = new User('Tom');
user.sayHi();
// --------- block ---------


// What is a class
console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(Object.getOwnPropertyNames(User.prototype));
// --------- block ---------


// Not just a syntatic sugar
//User();
console.log(User.toString());
// --------- block ---------


// Class Expression
let Box = class box {
	show() {
		console.log(box);
	}
};

new Box().show();

function makeClass(phrase) {
	return class {
		say() {
			console.log(phrase);
		}
	};
}

let SomeClass = makeClass('opapa');
new SomeClass().say();
// --------- block ---------


// Getters/setters
class Store {
	constructor(name) {
		this.name = name;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}

let store1 = new Store('Wiskey');
console.log(store1.name);
// --------- block ---------


// Computed names [...]
class Desc {
	['say' + 'Hi']() {
		console.log('Hi!');
	}
}

new Desc().sayHi();
// --------- block ---------


// Class fields
class Pen {
	name = 'pen';

	show() {
		console.log(this.name);
	}
}

let pen = new Pen();
pen.show();
console.log(pen.name, Pen.prototype.name);
// --------- block ---------


// Making bound methods with class fields
class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let button = new Button("hello");
setTimeout(button.click, 1000);
// --------- block ---------


// Task 1 - rewrite to class
// function Clock({ template }) {
//   let timer;
//   function render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;
//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
//     console.log(output);
//   }
//   this.stop = function() {
//     clearInterval(timer);
//   };
//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

class Clock {
	timer;
	constructor({ template }) {
		this.template = template;
	}
	stop() { clearInterval(this.timer) }
	start() {
		this._render();
		this.timer = setInterval(() => this._render(), 1000);
	}
	_render() {
		let date = new Date();
		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;
		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;
		let output = this.template
		  .replace('h', hours)
		  .replace('m', mins)
		  .replace('s', secs);
		console.log(output);
	}
}

let clock = new Clock({template: 'h:m:s'});
clock.start();