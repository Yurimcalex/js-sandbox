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