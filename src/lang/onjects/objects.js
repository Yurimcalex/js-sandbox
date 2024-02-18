let store = new Object();
let bike = {};

let user = {
	name: 'Nelli',
	age: 38,
	'can swim': true,
};

//console.log(user.name, user.age);

user.weight = 90;
user.isMarried = true;

//console.log(delete user.weight);

//console.log(user);

let prop1 = 'name';
//console.log(user[prop1]);

let employee = {
	[prop1]: 'John',
	job: 'driver'
};

function makeUser(name, age) {
	return {name, age};
}

//console.log(makeUser('Anna', 19));

//console.log(prop1 in employee, 'age' in employee);

let box = {
	size: undefined
};

//console.log('size' in box, box.size === undefined, box.height);

for (let key in user) {
	//console.log(user[key]);
}


// task 1
let visitor = {};
visitor.name = 'John';
visitor.surname = 'Smith';
visitor.name = 'Pete';
delete visitor.name;
console.log(visitor);


// task 2
function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));


// task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let salary in salaries) {
	sum += salaries[salary];
}
//console.log('sum:', sum);


// task 4
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for (let prop in obj) {
		if (typeof obj[prop] === 'number') {
			menu[prop] *= 2;
		}
	}
}

multiplyNumeric(menu);
console.log(menu);