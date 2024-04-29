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