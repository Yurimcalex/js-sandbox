let user = {
	name: 'Dilan',
	age: 35
};

user.sayHi = function () {
	console.log('Hello!')
};

user.sayHi();
// --------- block ---------


let box = {
	size: 16,
	greeting() {
		console.log('Hello!, I am a box');
	},
	showSize() {
		console.log(this.size);
	}
};
box.greeting();
box.showSize();
// --------- block ---------


let admin = {
	name: 'Joshua'
};

function showName() {
	console.log(this.name);
}

user.showName = showName;
admin.showName = showName;

user.showName();
admin.showName();

function sayPhraze(phraze) {
	let f = () => `${this.name}: ${phraze}`;
	console.log(f());
}

user.sayPhraze = sayPhraze;
user.sayPhraze('Hello');
// --------- block ---------


// task 2
let calculator = {
	a: null,
	b: null,
	read() {
		this.a = +prompt('Enter first number', 0);
		this.b = +prompt('Enter second number', 0);
	},
	sum() {
		console.log(this.a + this.b);
	},
	mul() {
		console.log(this.a * this.b);
	}
};

calculator.read();
calculator.sum();
calculator.mul();
// --------- block ---------


// task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();