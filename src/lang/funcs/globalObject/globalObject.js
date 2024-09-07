console.log(window === globalThis);

var x = 1;
console.log(window.x);

let y = 2;
console.log(window.y);


window.someImportantGlobalValue = {
	name: 'John'
};
console.log(someImportantGlobalValue);

if (!window.Promise) {
	window.Promise = function () {};
	console.log('Promises not suported!');
}