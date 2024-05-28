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