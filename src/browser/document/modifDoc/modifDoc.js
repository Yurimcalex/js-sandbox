// Modifying the document
let div = document.createElement('div');
let textNode = document.createTextNode('Here I am');

let div1 = document.createElement('div');
div1.className = 'alert';
div1.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
// ---1---
// --------- block ---------


// Insertion methods
div1_cont.append(div1);

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
// --------- block ---------


// insertAdjacentHTML/Text/Element
container.insertAdjacentHTML('beforebegin', '<p>Beforebegin</p>');
container.insertAdjacentHTML('afterend', '<p>Afterend</p>');
container.insertAdjacentHTML('afterbegin', '<p>Afterbegin</p>');
container.insertAdjacentHTML('beforeend', '<p>Beforeend</p>');
// ---2---
// --------- block ---------


// Node removal
setTimeout(() => {
	div1.remove();
}, 3000);

setInterval(() => {
	ol.append(liFirst);
}, 3000);
// --------- block ---------


// Cloning nodes: cloneNode
let ol1 = ol.cloneNode(true);
let ol2 = ol.cloneNode(false);

clones.append(ol1, ol2);
// --------- block ---------


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
// ---3---
// --------- block ---------


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
// --------- block ---------


// A word about document.write
setTimeout(() => {
	//document.write('<h1>Erase previous content and add this one</h1>');
}, 5000);
// ---4---
// --------- block ---------


// Task 1 - createTextNode vs innerHTML vs textContent
{
	let div = document.createElement('div');
	let text = '<span>Hello!!!</span>';
	//div.append(document.createTextNode(text));
	//div.innerHTML = text;
	div.textContent = text;

	task1.append(div);
}
// --------- block ---------


// Task 2 - Create a function that removes everything from the element
function clear(elem) {
	elem.innerHTML = '';
	//elem.replaceWith(elem.cloneNode(false));
}
// --------- block ---------


// Task 3 - Why does the text remain
//table.remove();
// --------- block ---------


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
// --------- block ---------


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

createTreeHTML(document.getElementById('tree'), data);
// ---5---
// --------- block ---------


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
// ---6---
// --------- block ---------


// Task 7 - Create a calendar
function createCalendar(elem, year, month) {
	let firstDay = new Date(year, month - 1).getDay() || 7;
	let lastDate = new Date(year, month, 0).getDate();
	let dates = new Array(firstDay - 1).fill(0);

	for (let i = 1; i <= lastDate; i += 1) {
		dates.push(i);
	}

	if (dates.length % 7) {
		dates.push(...new Array(7 - dates.length % 7).fill(0));
	}

	let table = '<table><tr>';
	['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].forEach(title => {
		table += '<th>' + title + '</th>';
	});
	table += '</tr>';

	for (let i = 0, c = 1; i < dates.length; i += 1) {
		if (c === 1) table += '<tr>';
		table += '<td>' + (dates[i] || '') + '</td>';
		if (c === 7) {
			table += '</tr>';
			c = 0;
		}
		c += 1;
	}

	calendar.innerHTML = table;
}

createCalendar(null, 2012, 10);
// ---7---
// --------- block ---------


// Task 8 - Colored clock with setInterval
function createClock(elem) {
	let clock = document.createElement('div');
	let display = document.createElement('div');
	let start = document.createElement('button');
	let stop = document.createElement('button');
	let timer;

	start.textContent = 'Start';
	stop.textContent = 'Stop';

	start.onclick = startClock;
	stop.onclick = stopClock;

	clock.append(display, start, stop);
	elem.append(clock);

	function update() {
		let d = new Date();
		let h = d.getHours();
		let m = d.getMinutes();
		let s = d.getSeconds();
		let html = '';
		html += `<span style="color:red;">${h < 10 ? `0${h}`: h}</span>:`;
		html += `<span style="color:green;">${m < 10 ? `0${m}`: m}</span>:`;
		html += `<span style="color:blue;">${s < 10 ? `0${s}`: s}</span>`;
		display.innerHTML = html;
	}

	update();

	function startClock() {
		if (!timer) {
			timer = setInterval(() => {
				update();
			}, 1000);
		}
	}

	function stopClock() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}	
}

createClock(clock);
// ---8---
// --------- block ---------


// Task 9 - Insert the HTML in the list
numbs_ul
	.children[0]
	.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
// ---9---
// --------- block ---------


// Task 10 - Sort the table
{
	// let rows = citizens.querySelectorAll('tbody > tr');
	// rows = [...rows].sort((a, b) => {
	// 	let aName = a.firstElementChild.textContent;
	// 	let bName = b.firstElementChild.textContent;
		
	// 	if (aName > bName) return 1;
	// 	if (bName > aName) return -1;
	// });

	// citizens.tBodies[0].append(...rows);
}