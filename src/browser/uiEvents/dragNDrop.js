// Drag n drop mouse events
// Drag n drop algorithm
ball.onmousedown = function (e) {
	let shiftX = e.clientX - ball.getBoundingClientRect().left;
	let shiftY = e.clientY - ball.getBoundingClientRect().top;

	ball.style.position = 'absolute';
	ball.style.zIndex = 1000;

	document.body.append(ball);

	function moveAt(pageX, pageY) {
		ball.style.left = pageX - shiftX + 'px';
		ball.style.top = pageY - shiftY + 'px';
	}

	moveAt(e.pageX, e.pageY);

	let currentDroppable = null;
	function onMouseMove(e) {
		moveAt(e.pageX, e.pageY);
		ball.hidden = true;
		let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
		ball.hidden = false;

		if (!elemBelow) return;

		let droppableBelow = elemBelow.closest('.droppable');

		if (currentDroppable != droppableBelow) {
			if (currentDroppable) {
				leaveDroppable(currentDroppable);
			}
			currentDroppable = droppableBelow;
			if (currentDroppable) {
				enterDroppable(currentDroppable);
			}
		}
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


// Correcting positioning


// Potential drop targets (droppables)
function enterDroppable(elm) {
	elm.style.background = 'white';
}

function leaveDroppable(elm) {
	elm.style.background = '';
}


// Task 1 - Slider
thumb.onmousedown = function (e) {
	e.preventDefault();
	let shiftX = e.clientX - thumb.getBoundingClientRect().left;

	function moveAt(pageX) {
		let left = pageX - shiftX - slider.getBoundingClientRect().left
		if (left > slider.offsetWidth - thumb.offsetWidth) return;
		if (left < 0) return;
		thumb.style.left = left  + 'px';
	}

	moveAt(e.pageX);

	function onMouseMove(e) {
		moveAt(e.pageX);
	}

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

	function onMouseUp() {
	  document.removeEventListener('mouseup', onMouseUp);
	  document.removeEventListener('mousemove', onMouseMove);
	}

	thumb.ondragstart = function () {
		return false;
	};
};