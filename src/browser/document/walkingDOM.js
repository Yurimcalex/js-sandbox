// Walking the DOM
// On top: documentElement and body
console.log(document.documentElement);

console.log(document.body);

console.log(document.head);


// Children: childNodes, firstChild, lastChild
for (let i = 0; i < document.body.childNodes.length; i += 1) {
	console.log(document.body.childNodes[i]);
}

if (document.body.hasChildNodes()) {
	console.log(document.body.firstChild, '<-- first elem of body');
	console.log(document.body.lastChild, '<-- last elem of body');
}

// DOM collections
for (let node of document.body.childNodes) {
	console.log(node);
}

let bodyElms = Array.from(document.body.childNodes);
console.log(bodyElms.pop());


// Siblings and the parent
console.log(document.body.parentNode === document.documentElement);
console.log(document.head.nextSibling);
console.log(document.body.previousSibling);


// Element-only navigation
console.log('------------element-only navigation-----------');
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);

let elem = window.innerDiv;
while (elem = elem.parentElement) {
	console.log(elem);
}

for (let elem of document.body.children) {
	console.log(elem);
}

console.log(
	document.body.firstElementChild,
	document.body.lastElementChild.previousElementSibling
);


// More links: tables
console.log(table.rows);
console.log(table.tBodies);
console.log(table.rows[1].cells);


// Task 1 DOM children
let div = document.body.firstElementChild;
let ul = div.nextElementSibling;
let li = ul.lastElementChild;