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