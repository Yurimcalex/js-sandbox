class Ball {}
let ball = new Ball();
console.log(ball instanceof Ball);

console.log([] instanceof Array);
console.log([] instanceof Object);


class Fly {
	static [Symbol.hasInstance](obj) {
		if (obj.canFly) return true;
	}
}

let fly = { canFly: true };
console.log(fly instanceof Fly);


class Dog {}
class HappyDog extends Dog {}
let dog = new HappyDog();
console.log(dog instanceof Dog);

function Rabbit() {}
let rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit instanceof Rabbit);

let objToStr = Object.prototype.toString;
console.log(objToStr.call([]));


let pen = {
	[Symbol.toStringTag]: 'Pen'
};

console.log({}.toString.call(pen));


// Task 1 - Strange instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B );