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


// Event delegation
let currentElem = null;

table.onmouseover = function (e) {
	if (currentElem) return;
	let target = e.target.closest('td');
	if (!target) return;
	if (!table.contains(target)) return;
	currentElem = target;
	target.style.background = 'lightgray';
};

table.onmouseout = function (e) {
	if (!currentElem) return;
	let relatedTarget = event.relatedTarget;
	console.log(relatedTarget, currentElem, '----');
	while (relatedTarget) {
		if (relatedTarget == currentElem) return;
		relatedTarget = relatedTarget.parentNode;
	}
	currentElem.style.background = '';
	currentElem = null;
};


// Task 1 - Improved tooltip behavior
let currentTooltip = null;
let elm = null;
document.addEventListener('mouseover', function (e) {
	let target = e.target;
	let tooltipContent = target.dataset.tooltip;
	if (tooltipContent) {
		if (currentTooltip) {
			currentTooltip.remove();
			currentTooltip = null;
		}
		let coords = target.getBoundingClientRect();
		let tooltip = document.createElement('div');
		tooltip.className = 'tooltip';
		tooltip.innerHTML = tooltipContent;
		document.body.append(tooltip);
		tooltip.style.left = coords.left + 'px';
		tooltip.style.top = coords.bottom + 'px';
		currentTooltip = tooltip;
		elm = target;
	}
});

document.addEventListener('mouseout', function (e) {
	if (!currentTooltip) return;
	let relatedTarget = e.relatedTarget;
	while (relatedTarget) {
		if (relatedTarget == elm) return;
		relatedTarget = relatedTarget.parentNode;
	}
	currentTooltip.remove();
	elm = null;
	currentTooltip = null;
});