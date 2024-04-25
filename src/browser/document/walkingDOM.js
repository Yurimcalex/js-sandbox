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