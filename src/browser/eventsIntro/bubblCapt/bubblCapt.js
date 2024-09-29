// Bubbling and capturing
div.onclick = function () {
	console.log('I am the div handler!')
}

let conts = [level1, level2, level3];
conts.forEach(elem => {
	elem.addEventListener('click', function (e) {
		//console.log(this.tagName);
	});
});
// --------- block ---------


// event.target
level3.addEventListener('click', function (e) {
	console.log('target', e.target);
	console.log('owner', e.currentTarget);
});

document.body.onclick = function () {
	console.log('BODY');
};

level1.addEventListener('click', function (e) {
	console.log('fires on', e.target);
	e.stopPropagation();
});
// --------- block ---------


// Capturing
conts.forEach(elem => {
	elem.addEventListener('click', function (e) {
		console.log(this.tagName);
	}, true);
});