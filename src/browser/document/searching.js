// Searching: getElement*, querySelector*
// document.getElementById or id
let box = document.getElementById('box');
box.style.background = 'lightgray';
window['box-content'].style.color = 'gray';


// querySelectorAll
let lastLis = document.querySelectorAll('ul > li:last-child');
for (let li of lastLis) {
	console.log(li.innerHTML);
}


// querySelector
let ulContainer = document.querySelector('.ul-container');
let firstLi = ulContainer.querySelector('ul > li:first-child');
firstLi.style.color = 'purple';


// matches
for (let link of document.querySelector('.links').children) {
	if (link.matches('a[href$=zip]')) {
		link.style.color = 'transparent';
	}
}


// closest
let chapter = document.querySelector('.chapter');
chapter.closest('ul').style.border = '1px solid gray';
chapter.closest('.library').style.background = 'lightgray';


// getElementsBy*
let lis = ulContainer.getElementsByTagName('li');
console.log(lis);
let chapters = document
	.querySelector('.book')
	.getElementsByClassName('chapter');
console.log(chapters);


console.log(document.getElementsByName('inp'));


// Live collections
let liCollection = document
	.body
	.querySelector('.book')
	.getElementsByTagName('li');
console.log(liCollection.length);

document
	.body
	.querySelector('.book').appendChild(document.createElement('li'));

console.log(liCollection.length);


// Task 1 - Search for elements
// let ageTable = document.getElementById('age-table');
// let labels = ageTable.getElementsByTagName('label');
// let firstTd = ageTable.querySelector('td');
// let form = document.getElementsByName('search')[0];
// let firstInput = form.querySelector('input');
// let inputs = form.querySelectorAll('input');
// let lastInput = inputs[inputs.length - 1];