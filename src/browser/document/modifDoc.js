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


// Old-school insert/remove methods
let li4 = document.createElement('li');
li4.appendChild(document.createTextNode('4'))
ul.appendChild(li4);

let li5 = document.createElement('li');
li5.innerHTML = '5';
ul.insertBefore(li5, ul.children[1]);
ul.insertBefore(li5, ul.firstChild);

let li6 = document.createElement('li');
li6.innerHTML = '6';
ul.replaceChild(li6, li5);

ul.removeChild(ul.firstElementChild);


// A word about document.write
setTimeout(() => {
	//document.write('<h1>Erase previous content and add this one</h1>');
}, 5000);


// Task 1 - createTextNode vs innerHTML vs textContent
{
	let div = document.createElement('div');
	let text = '<span>Hello!!!</span>';
	//div.append(document.createTextNode(text));
	//div.innerHTML = text;
	div.textContent = text;

	document.body.append(div);
}


// Task 2 - Create a function that removes everything from the element
function clear(elem) {
	elem.innerHTML = '';
	//elem.replaceWith(elem.cloneNode(false));
}


// Task 3 - Why does the text remain
table.remove();


// Task 4 - Create a list
function createListFromUser() {
	let ul = document.createElement('ul');
	let input;
	while (input = prompt('What it should be?', '')) {
		let li = document.createElement('li');
		li.textContent = input;
		ul.append(li);
	}
	return ul;
}

//console.log(createListFromUser());


// Task 5 - Create a tree from the object
let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

function createTree(container, data) {
	let ul = document.createElement('ul');
	let items = Object.keys(data);
	if (!items.length) return;
	for (let item of items) {
		let li = document.createElement('li');
		li.textContent = item;
		ul.append(li);
		createTree(li, data[item]);
	}
	container.append(ul);
}

//createTree(document.body, data);

function createTreeHTML(container, data) {
	let html = '';

	function create(data) {
		let items = Object.keys(data);
		if (!items.length) return;
		html += '<ul>';
		for (let item of items) {
			html += `<li>${item}</li>`;
			create(data[item]);
		}
		html += '</ul>';
	}

	create(data);

	container.innerHTML = html;
}

//createTreeHTML(document.getElementById('tree'), data);


// Task 6 - Show descendants in a tree
function showDescedants(list) {
	let lis = list.querySelectorAll('li');
	for (let li of lis) {
		let childLis = li.querySelectorAll('li');
		if (childLis.length) {
			//let text = li.firstChild.textContent.trim();
			//li.firstChild.replaceWith(`${text} [${childLis.length}]`);
			li.firstChild.data += ` [${childLis.length}]`;
		}
	}
}

showDescedants(ul_list);