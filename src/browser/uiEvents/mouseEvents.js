// Mouse events
button1.onclick = function (e) {
	if (e.altKey && e.shiftKey) {
		console.log('All right!');
	}
};


// Coordinates: clientX/Y, pageX/Y
document.onmousemove = function (e) {
	let html = `
		window coords: x:${e.clientX}, y:${e.clientY}<br/>
		page coords: x:${e.pageX}, y:${e.pageY}
	`;

	coords.innerHTML = html;
};


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