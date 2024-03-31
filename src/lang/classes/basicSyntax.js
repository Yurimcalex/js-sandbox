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

// What is a class
console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(Object.getOwnPropertyNames(User.prototype));

// Not just a syntatic sugar
//User();
console.log(User.toString());

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

let store = new Store('Wiskey');
console.log(store.name);

// Computed names [...]
class Desc {
	['say' + 'Hi']() {
		console.log('Hi!');
	}
}

new Desc().sayHi();

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