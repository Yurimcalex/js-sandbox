let animal = {
	eats: true
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('white wind');
console.log(rabbit.eats);

Rabbit.prototype = { jumps: true };
let rabbit1 = new Rabbit('another rabbit');

console.log(rabbit.eats, rabbit1.eats);


function Ball() {}
console.log(Ball.prototype.constructor === Ball);


function Dog(name) {
	this.name = name;
}

let puffy = new Dog('Puffy');
let niffy = new puffy.constructor('Niffy');


// Task 1 - changing prototype
{
	function Rabbit() {}
	Rabbit.prototype = {
	  eats: true
	};

	let rabbit = new Rabbit();
	//console.log(rabbit.eats);

	//Rabbit.prototype = {};
	//console.log(rabbit.eats);

	//Rabbit.prototype.eats = false;
	//console.log(rabbit.eats);

	//delete rabbit.eats;
	//console.log(rabbit.eats);

	delete Rabbit.prototype.eats;
	console.log(rabbit.eats);
}