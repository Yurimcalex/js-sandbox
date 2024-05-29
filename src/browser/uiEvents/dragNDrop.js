// Drag n drop mouse events
// Drag n drop algorithm
ball.onmousedown = function (e) {
	ball.style.position = 'absolute';
	ball.style.zIndex = 1000;

	document.body.append(ball);

	function moveAt(pageX, pageY) {
		ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
		ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
	}

	moveAt(e.pageX, e.pageY);

	function onMouseMove(e) {
		moveAt(e.pageX, e.pageY);
	}

	document.addEventListener('mousemove', onMouseMove);

	ball.onmouseup = function (e) {
		document.removeEventListener('mousemove', onMouseMove);
		ball.onmouseup = null;
	}

	ball.ondragstart = function () {
		return false;
	};
};