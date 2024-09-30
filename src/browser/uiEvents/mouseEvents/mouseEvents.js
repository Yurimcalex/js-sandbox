// Mouse events
button1.onclick = function (e) {
	if (e.altKey && e.shiftKey) {
		console.log('All right!');
	}
};
// ---1---
// --------- block ---------


// Coordinates: clientX/Y, pageX/Y
document.onmousemove = function (e) {
	let html = `
		window coords: x:${e.clientX}, y:${e.clientY}<br/>
		page coords: x:${e.pageX}, y:${e.pageY}
	`;

	coords.innerHTML = html;
};
// ---2---
// --------- block ---------


// Preventing selection on mousedown
text.ondblclick = function (e) {
	console.log('dbclicked!');
};

noSelection.ondblclick = function (e) {
	console.log('dbclicked without a selection!');
};
noSelection.onmousedown = () => false;


noCopy.oncopy = function (e) {
	console.log('Copying forbidden!');
	return false;
};
// ---3---
// --------- block ---------


// Task 1 - Selectable list
let selectedItems = [];
ul.onmousedown = () => false;
ul.onclick = function (e) {
	let li = e.target;
	if (e.metaKey || e.ctrlKey) {
		if (selectedItems.includes(li)) {
			li.classList.toggle('selected');
		} else {
			li.classList.add('selected');
			selectedItems.push(li);
		}
		
	} else {
		selectedItems.forEach(li => li.classList.toggle('selected'));
		if (!li.classList.contains('selected')) {
			li.classList.add('selected');
		}
		selectedItems = [li];
	}
};
// ---4---
