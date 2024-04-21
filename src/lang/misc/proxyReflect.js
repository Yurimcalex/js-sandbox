// Proxy and Reflect
// Proxy
let target = {};
let proxy = new Proxy(target, {});
proxy.test = 10;
console.log(target.test, proxy.test);
for (let key in proxy) console.log(key);


// Default value with 'get' trap
let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
	get(target, prop) {
		if (prop in target) {
			return target[prop];
		} else {
			return 0;
		}
	}
});

console.log(numbers[1], numbers[900]);


let dictionary = {
	'Hello': 'Hola',
	'Bye': 'Adios'
};

dictionary = new Proxy(dictionary, {
	get(target, prop) {
		if (prop in target) return target[prop];
		else return prop;
	}
});

console.log(dictionary['Hello'], dictionary['Welcome']);


// Validation with 'set' trap
let numbs = [];
numbs = new Proxy(numbs, {
	set(target, prop, value) {
		if (typeof value === 'number') {
			target[prop] = value;
			return true;
		} else {
			return false;
		}
	}
});

numbs.push(1);
numbs.push(2);
console.log(numbs.length);
//numbs.push('test');


// Iteration with 'ownKeys' and 'getOwnPropertyDescriptor'
let user = {
	name: 'Ithan',
	age: 30,
	_password: '****'
};

user = new Proxy(user, {
	ownKeys(target) {
		return Object.keys(target).filter(key => !key.startsWith('_'));	
	}
});

for (let key in user) {
	console.log(key);
}

console.log(Object.keys(user));
console.log(Object.values(user));


let balls = {};
balls = new Proxy(balls, {
	ownKeys(target) {
		return ['key1', 'key2', 'key3'];
	},
	getOwnPropertyDescriptor(target, prop) {
		return {
			enumerable: true,
			configurable: true
		};
	}
});
console.log(Object.keys(balls));


// Protected properties with 'deleteProperty' and other traps
let fruit = {
	name: 'apple',
	_secret: '****'
};

fruit = new Proxy(fruit, {
	get(target, prop) {
		if (prop.startsWith('_')) {
			throw new Error('Access denied');
		}
		let value = target[prop];
		return (typeof value === 'function') ? value.bind(target) : value;
	},
	set(target, prop, value) {
		if (prop.startsWith('_')) {
			throw new Error('Access denied');
		} else {
			target[prop] = value;
			return true;
		}
	},
	deleteProperty(target, prop) {
		if (prop.startsWith('_')) {
			throw new Error('Access denied');
		} else {
			delete target[prop];
			return true;
		}
	},
	ownKeys(target) {
		return Object.keys(target).filter(key => !key.startsWith('_'));
	}
});

try {
	console.log(fruit._secret);
} catch (err) {
	console.log(err.message);
}

try {
	fruit._secret = '...';
} catch (err) {
	console.log(err.message);
}

try {
	delete fruit._secret;
} catch (err) {
	console.log(err.message);
}

for (let key in fruit) console.log(key);


// In range with has trap
let range = {
	start: 1,
	end: 10
};

range = new Proxy(range, {
	has(target, prop) {
		return prop >= target.start && prop <= target.end;
	}
});

console.log(3 in range);
console.log(30 in range);


// Wrapping functions: 'apply'
function delay(f, ms) {
	return function () {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}

function sayHi(user) {
	console.log(`Hi, ${user}!`);
}

console.log(sayHi.length);
sayHi = delay(sayHi, 1000);
console.log(sayHi.length);


function delay_p(f, ms) {
	return new Proxy(f, {
		apply(target, thisArg, args) {
			setTimeout(() => target.apply(thisArg, args), ms);
		}
	});
}

function sayBye() {
	console.log('Bye!');
}

sayBye = delay_p(sayBye, 1000);
console.log(sayBye.length);
sayBye();


// Reflect
let game = {};
Reflect.set(game, 'stars', 100);
console.log(game.stars);


let car = {
	name: 'Lamba'
};

car = new Proxy(car, {
	get(target, prop, receiver) {
		console.log(`GET ${prop}`);
		return Reflect.get(target, prop, receiver);
	},
	set(target, prop, val, receiver) {
		console.log(`SET ${prop}`);
		return Reflect.set(target, prop, val, receiver);
	}
});

car.name;
car.name = 'Lamba Super';
car.color = 'blue';


// Proxying a getter
let carrot = {
	_weight: 500,
	get weight() {
		return this._weight;
	}
};

let carrotProxy = new Proxy(carrot, {
	get(target, prop, receiver) {
		//return target[prop];
		return Reflect.get(target, prop, receiver);
	}
});

console.log(carrotProxy.weight);

let frenchCarrot = {
	__proto__: carrotProxy,
	_weight: 350
};

console.log(frenchCarrot.weight);


// Proxy limitations
let map = new Map();
let mapProxy = new Proxy(map, {});
//mapProxy.set('test', 1);


let map_1 = new Map();
let map_1Proxy = new Proxy(map_1, {
	get(target, prop, receiver) {
		let value = Reflect.get(...arguments);
		return typeof value === 'function' ? value.bind(target) : value;
	}
});

map_1Proxy.set('test', 1);
console.log(map_1Proxy.get('test'));


// Private fields
// class User {
// 	#name = 'Guest';
// 	getName() {
// 		return this.#name;
// 	}
// }

// let u = new User();
// u = new Proxy(u, {
// 	get(target, prop, receiver) {
// 		let value = Reflect.get(...arguments);
// 		return typeof value === 'function' ? value.bind(target) : value;
// 	}
// });

// console.log(user.getName());


// Proxy != target
let allUsers = new Set();
class Visitor {
	constructor(name) {
		this.name = name;
		allUsers.add(this);
	}
}

let visitor = new Visitor('Paul');
console.log(allUsers.has(visitor));
visitor = new Proxy(visitor, {});
console.log(allUsers.has(visitor));