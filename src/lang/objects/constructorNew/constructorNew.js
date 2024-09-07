function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User('Katherine');

//console.log(user);


let store = new function () {
	this.name = 'Garage';
};

//console.log(store);

function constructBox(size) {
	if (!new.target) {
		return { isEmpty: true };
	}
	this.size = size;
}

let box = constructBox(16);
//console.log(box);


function Car(name) {
	this.name = name;
	this.go = function () {
		console.log('Brrrrrrrrrrr!');
	}
}

let car = new Car('Lamborgini');
//car.go();


// task 1
let commonObj = {};
function A() {
	this.type = 'a';
	return commonObj;
}
function B() {
	this.type = 'b';
	return commonObj;
}
let a = new A();
let b = new B();
//console.log(a == b);


// task 2
function Calculator() {
	this.read = function () {
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	};
	this.sum = function () {
		return this.a + this.b;
	};
	this.mul = function () {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
//calculator.read();
//console.log(calculator.sum(), calculator.mul());


// task 3
function Accumulator(value) {
	this.value = value;
	this.read = function () {
		this.value += +prompt('Your number?', 0);
	};
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);