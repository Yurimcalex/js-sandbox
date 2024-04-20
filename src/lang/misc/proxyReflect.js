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