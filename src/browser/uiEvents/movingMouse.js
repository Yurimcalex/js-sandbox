// Moving the mouse: mouseover/out, mouseenter/leave
// Events mouseover/mouseout, relatedTarget
box.onmouseover = function (e) {
	this.innerHTML = `x:${e.pageX},y:${e.pageY}<br/>`;
	this.innerHTML += `target: ${e.target.tagName}<br/>`;
	this.innerHTML += `come from: ${e.relatedTarget.tagName}`;
}

box.onmouseout = function (e) {
	this.innerHTML = '';
	this.innerHTML += `leave from: ${e.target.tagName}<br/>`;
	this.innerHTML += `come to: ${e.relatedTarget.tagName}`;
}


// Skipping elements
lane.onmouseover = function (e) {
	if (!e.target.hasAttribute('id')) {
		e.target.innerHTML = '<span>Fired!</span>'
	}
};

clearLane.onclick = function (e) {
	[...lane.children].forEach(elm => elm.innerHTML = '');
};


// Mouseout when leaving for a child
parentCont.onmouseout = function (e) {
	estatus.innerHTML = `
		target(leave from): ${e.target.id};<br/>
		relatedTarget(came to): ${e.relatedTarget.id};<br/>
	`;
};


// Events mouseenter and mouseleave
boxes.onmouseenter = function (e) {
	console.log('enter to:', e.target);
};

boxes.onmouseleave = function (e) {
	console.log('leave from:', e.target);
};