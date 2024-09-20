// DOM tree
document.body.style.background = 'purple';
setTimeout(() => {
	document.body.style.background = '';
}, 3000);


document.body.innerHTML += `<table id="table"><tr><td>1</td></tr></table>`;
