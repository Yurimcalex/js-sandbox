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