// [[Prototype]]
let animal = { 
	eats: true,
	walk() {
		console.log('animal is walking...');
	} 
};

let rabbit = { 
	jumps: true 
};

rabbit.__proto__ = animal;
console.log(rabbit.eats);
rabbit.walk();


let funRabbit = {
	makeFun() {
		console.log('Youuuhhooouuu!!!');
	},
	__proto__: rabbit
};

console.log(funRabbit.jumps);
funRabbit.walk();
// --------- block ---------


// Writing doesn't use prototype
rabbit.walk = function () {
	console.log('rabbit, bounce, bounce!');
};

funRabbit.walk();


let user = {
	name: 'Sam',
	lname: 'Parker',
	get fullname() {
		console.log(`${this.name} ${this.lname}`);
	},
	set fullname(value) {
		[this.name, this.lname] = value.split(' ');
	}
};

let admin = {
	isAdmin: true,
	__proto__: user
};

admin.fullname = 'Colins Mcneu';
user.fullname;
admin.fullname;
// --------- block ---------


// The value of this
{
	let animal = {
		walk() {
			if (!this.isSleeping) console.log('I walk');
		},
		sleep() {
			this.isSleeping = true;
		}
	};

	let rabbit = {
		name: 'Barbarik',
		__proto__: animal
	};

	rabbit.walk();
	rabbit.sleep();
	console.log(rabbit.isSleeping);
}
// --------- block ---------


// for..in loop
{
	let animal = {
		eats: true
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	console.log(Object.keys(rabbit));
	for (let prop in rabbit) console.log(prop);

	for (let prop in rabbit) {
		if (rabbit.hasOwnProperty(prop)) {
			console.log(`own prop - ${prop}`);
		} else {
			console.log(`inherited prop - ${prop}`);
		}
	}
}
// --------- block ---------


// Task 1 - working with prototype
{
	let animal = {
		jumps: null
	};

	let rabbit = {
		__proto__: animal,
		jumps: true
	};

	console.log(rabbit.jumps);
	delete rabbit.jumps;
	console.log(rabbit.jumps);
	delete animal.jumps;
	console.log(rabbit.jumps);
}
// --------- block ---------


// Task 2 - searching algorithm
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.glasses, head.glasses);
// --------- block ---------


// Task 3 - where does it write
{
	let animal = {
	  eat() {
	    this.full = true;
	  }
	};

	let rabbit = {
	  __proto__: animal
	};

	rabbit.eat();
	console.log(rabbit.full);
}
// --------- block ---------


// Task 4 - why are both hamsters full
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
	stomach: [],
  __proto__: hamster
};

let lazy = {
	stomach: [],
  __proto__: hamster
};

speedy.eat('apple');
console.log(lazy.stomach);