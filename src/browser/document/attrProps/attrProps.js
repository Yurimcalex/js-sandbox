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
// ---1---
// --------- block ---------


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
// --------- block ---------


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
// ---2---
// --------- block ---------


// DOM properties are typed
console.log(input1.getAttribute('checked'));
console.log(input1.checked);

console.log(div.getAttribute('style'));
console.log(div.style);
console.log(div.style.color);

console.log(a.getAttribute('href'));
console.log(a.href);
// ---3---
// --------- block ---------


// Non-standard attributes, dataset
let user = {
	name: 'Goodguy',
	age: 27
};

for (let div of document.querySelectorAll('[show-info]')) {
	let field = div.getAttribute('show-info');
	div.innerHTML = user[field];
}

document.querySelector('[order-state]').setAttribute('order-state', 'canceled');

console.log(animal.dataset.animal);

console.log(bird.dataset.localBird);
bird.dataset.localBird = 'village';
// ---4---
// --------- block ---------


// Task 1 - get the attribute
console.log(document.querySelector('[data-widget-name]').dataset.widgetName);
console.log(document.querySelector('[data-widget-name]').getAttribute('data-widget-name'));
// ---5---
// --------- block ---------


// Task 2 - Make external links orange
let links = someLinks.querySelectorAll('[href]');
for (let link of links) {
	let href = link.getAttribute('href');
	if (~href.indexOf('://') && !href.startsWith('http://internal.com')) {
		link.style.color = 'orange';
	}
}
// ---6---
