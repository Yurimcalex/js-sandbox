// Event delegation
let selectedTD;
table.onclick = function (e) {
	let td = e.target.closest('td');
	if (!td) return;
	if (!table.contains(td)) return;
	highlight(td);
}

function highlight(td) {
	if (selectedTD) {
		selectedTD.classList.remove('highlight');
	}
	selectedTD = td;
	selectedTD.classList.add('highlight');
}
// ---1---
// --------- block ---------


// Delegation example: actions in markup
class Menu {
	constructor(elem) {
		this._elem = elem;
		elem.onclick = this.onClick.bind(this);
	}

	onClick(e) {
		let action = e.target.dataset.action;
		if (action) {
			this[action]();
		}
	}

	save() {
		console.log('Saving!');
	}

	load() {
		console.log('Loading!');
	}

	search() {
		console.log('Searching!');
	}
}

new Menu(menu);
// ---2---
// --------- block ---------


// The behavior pattern
document.addEventListener('click', function (e) {
	if (e.target.dataset.counter != undefined) {
		e.target.value++;
	}
});

document.addEventListener('click', function (e) {
	let id = e.target.dataset.toggleId;
	if (!id) return;
	let elem = document.getElementById(id);
	elem.hidden = !elem.hidden;
});
// ---3---
// --------- block ---------


// Task 1 - Hide messages with delegation
container.addEventListener('click', function (e) {
	let target = e.target;
	if (target.classList.contains('remove-button')) {
		let pane = target.closest('.pane');
		if (pane) {
			pane.hidden = true;
		}
	}
});
// ---4---
// --------- block ---------


// Task 2 - Tree menu
tree.querySelectorAll('li').forEach(li => {
	if (li.children.length) {
		let span = document.createElement('span');
		span.className = 'menu';
		span.textContent = li.firstChild.data.trim();
		li.firstChild.replaceWith(span);
	}
});

tree.addEventListener('click', function (e) {
	let target = e.target;
	if (target.classList.contains('menu')) {
		let ul = target.closest('li').querySelector('ul');
		if (ul) {
			ul.hidden = !ul.hidden;
		}
	}
});
// ---5---
// --------- block ---------


// Task 3 - Sortable table
grid.addEventListener('click', function (e) {
	let target = e.target;
	let type = target.dataset.type;
	if (type) {
		let ind = target.cellIndex;
		let rows = [...this.tBodies[0].rows];
		if (type === 'number') {
			rows.sort((a, b) => 
				+a.cells[ind].textContent - +b.cells[ind].textContent);
		} else {
			rows.sort((a, b) => {
				let at = a.cells[ind].textContent;
				let bt = b.cells[ind].textContent;
				if (at > bt) return 1;
				if (at < bt) return -1;
				return 0;
			});
		}
		this.tBodies[0].append(...rows);
	}
});
// ---6---
// --------- block ---------


// Task 4 - tooltip behavior
document.addEventListener('mouseover', function (e) {
	let target = e.target;
	if (target.dataset.tooltip) {
		let html = target.dataset.tooltip;
		let tooltip = document.createElement('div');
		tooltip.innerHTML = html;
		tooltip.style.position = 'absolute';
		tooltip.className = 'tooltip';
		document.body.append(tooltip);

		let { top, left, bottom, width } = target.getBoundingClientRect();
		if (top < tooltip.offsetHeight + 5) {
			tooltip.style.top = bottom + 5 + window.pageYOffset + 'px';
		} else {
			tooltip.style.top = top - 5 - tooltip.offsetHeight + window.pageYOffset + 'px';
		}

		let lc = width / 2 - tooltip.offsetWidth / 2 + left;
		if (lc < left) lc = left;
		tooltip.style.left = lc + 'px';
	}
});

document.addEventListener('mouseout', function (e) {
	let tooltip = document.querySelector('.tooltip');
	if (tooltip) tooltip.remove();
});
// ---7---
