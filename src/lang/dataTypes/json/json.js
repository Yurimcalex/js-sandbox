// JSON.stringify
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
  addr: {
  	city: 'NY',
  	street: 'Green 1'
  }
};

let studentJSON = JSON.stringify(student);
console.log(studentJSON);


let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

let userJSON = JSON.stringify(user);
console.log(userJSON);
// --------- block ---------


// Excluding and transforming: replacer
let studentJSON1 = JSON.stringify(
	student,
	['name', 'age', 'addr', 'city']
);
console.log(studentJSON1);


let point = {
	x: 1,
	y: 2,
	z: [1, 2, 3]
};

let pointJSON = JSON.stringify(point, function replacer(key, value) {
	if (value === point) return value;
	return typeof value === 'number' ? value : undefined;
});

console.log(pointJSON);
// --------- block ---------


// Formatting: space
console.log(JSON.stringify(student, null, 4));
// --------- block ---------


// Custom toJSON
let animal = {
	type: 'dog',
	name: 'Bulter',
	toJSON() {
		return `${this.type} - ${this.name}`;
	}
};

console.log(JSON.stringify(animal));

let pack = {
	cat: 'Bob',
	dog: animal
};
console.log(JSON.stringify(pack));
// --------- block ---------


// JSON.parse
let numbers = "[0, 1, 2, 3]";
console.log(JSON.parse(numbers, function (key, value) {
	return typeof value === 'number' ? value * 10 : value;
}));
// --------- block ---------


// task - turn the object into JSON and back
let employee = {
  name: "John Smith",
  age: 35
};

let employeeJSON = JSON.stringify(employee);
let employeeFromJSON = JSON.parse(employeeJSON);
// --------- block ---------


// task 2 - exclude backreferences
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// let meetupJSON = JSON.stringify(meetup, function replacer(key, value) {
// 	// self -> meetup
// 	if (value === this) return undefined;
// 	// room[occupiedBy] -> meetup
// 	if (this === room && value === meetup) return undefined;
// 	return value; 
// });
let meetupJSON = JSON.stringify(meetup, function replacer(k, v) {
	return (k != '' && v == meetup) ? undefined : v;
})
console.log(meetupJSON);