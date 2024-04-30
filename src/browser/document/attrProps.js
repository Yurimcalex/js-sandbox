// Attributes and properties
// DOM properties
document.body.myData = {
	name: 'Bob',
	title: 'Fisherman'
};

console.log(document.body.myData);

document.body.sayTagName = function () {
	console.log(this.tagName);
};

document.body.sayTagName();

Element.prototype.sayHi = function () {
	console.log(`Hi, i am ${this.tagName}`);
}

document.documentElement.sayHi();
document.body.sayHi();


// HTML attributes
console.log(document.body.firstElementChild.id);
console.log(document.body.firstElementChild.something);

console.log(document.body.firstElementChild.getAttribute('something'));

console.log(elem.getAttribute('about'));
elem.setAttribute('test', 123);

console.log(elem.outerHTML);

for (let attr of elem.attributes) {
	console.log(`${attr.name} = ${attr.value}`);
}


// Property-attribute synchronization
let input = document.querySelector('input');
input.setAttribute('id', 'id');
console.log(input.id);
input.id = 'newId';
console.log(input.getAttribute('id'));

input.setAttribute('value', 'text');
console.log(input.value);

input.value = 'new text';
console.log(input.getAttribute('value'));