// Modifying the document
let div = document.createElement('div');
let textNode = document.createTextNode('Here I am');

let div1 = document.createElement('div');
div1.className = 'alert';
div1.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// Insertion methods
document.body.append(div1);

ol.before('before');
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);

div1.after(
	'<p>It will be text only</p>',
	document.createElement('hr')
);


// insertAdjacentHTML/Text/Element
container.insertAdjacentHTML('beforebegin', '<p>Beforebegin</p>');
container.insertAdjacentHTML('afterend', '<p>Afterend</p>');
container.insertAdjacentHTML('afterbegin', '<p>Afterbegin</p>');
container.insertAdjacentHTML('beforeend', '<p>Beforeend</p>');


// Node removal
setTimeout(() => {
	div1.remove();
}, 3000);

setInterval(() => {
	ol.append(liFirst);
}, 3000);


// Cloning nodes: cloneNode
let ol1 = ol.cloneNode(true);
let ol2 = ol.cloneNode(false);

document.body.append(ol1, ol2);


// DocumentFragment
function getListContent() {
	let fragment = new DocumentFragment();
	for (let i = 0; i < 4; i += 1) {
		let li = document.createElement('li');
		li.append(i);
		fragment.append(li);
	}
	return fragment;
}

ul.append(getListContent());