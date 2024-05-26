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