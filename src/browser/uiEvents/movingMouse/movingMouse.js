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
// ---1---
// --------- block ---------


// Skipping elements
lane.onmouseover = function (e) {
	if (!e.target.hasAttribute('id')) {
		e.target.innerHTML = '<span>Fired!</span>'
	}
};

clearLane.onclick = function (e) {
	[...lane.children].forEach(elm => elm.innerHTML = '');
};
// ---2---
// --------- block ---------


// Mouseout when leaving for a child
parentCont.onmouseout = function (e) {
	estatus.innerHTML = `
		target(leave from): ${e.target.id};<br/>
		relatedTarget(came to): ${e.relatedTarget.id};<br/>
	`;
};
// ---3---
// --------- block ---------


// Events mouseenter and mouseleave
boxes.onmouseenter = function (e) {
	console.log('enter to:', e.target);
};

boxes.onmouseleave = function (e) {
	console.log('leave from:', e.target);
};
// ---4---
// --------- block ---------


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
// ---5---
// --------- block ---------


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
// ---6---
// --------- block ---------


// Task 2 - Smart tooltip
let tooltip = document.createElement('div');
tooltip.className = "tooltip";
tooltip.innerHTML = "Tooltip";

class HoverIntent {
	constructor({ elem, over, out }) {
		let timer;
		let tip = null;

		elem.onmouseenter = function (e) {
			let x = 0, nextX = 100;
			elem.onmousemove = function (e) {
				nextX = e.clientX;
			}

			timer = setInterval(() => {
				if (tip) clearInterval(timer);
				let diff = x - nextX;
				if (Math.abs(diff) < 30) {
					over();
					tip = true;
				}
				x = nextX;
			}, 100);
		};

		elem.onmouseleave = function (e) {
			elem.onmousemove = null;
			if (timer) clearInterval(timer);
			if (tip) {
				out();
				tip = false;
			}
		}
	}
}

new HoverIntent({
  elem: cont,
  over() {
    tooltip.style.left = cont.getBoundingClientRect().left + 'px';
    tooltip.style.top = cont.getBoundingClientRect().bottom + 5 + 'px';
    document.body.append(tooltip);
  },
  out() {
    tooltip.remove();
  }
});
// ---7---
