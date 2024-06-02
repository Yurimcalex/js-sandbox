// Forms: events and method submit
// Event: submit
form1.onsubmit = function () {
	console.log('Submit!');
	return false;
};

form1.elements[1].onclick = function () {
	console.log('Click!');
};