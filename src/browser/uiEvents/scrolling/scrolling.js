// Scrolling
window.addEventListener('scroll', function (e) {
	scrollInfo.innerHTML = `Current scroll: ${window.pageYOffset}px`;
});
// ---1---
// --------- block ---------


// Task 1 - Endless page
section.addEventListener('scroll', function (e) {
	let currScroll = section.scrollTop;
	let fullScroll = section.scrollHeight - section.clientHeight;
	if (currScroll > fullScroll - 100) {
		section.append(section.children[1].cloneNode(true));
	}

	toTop.style.top = currScroll + 5 + 'px';

	if (currScroll > section.clientHeight) {
		toTop.hidden = false;	
	}
});

console.log(document.documentElement.getBoundingClientRect());
console.log(document.documentElement.clientHeight);
// ---2---
// --------- block ---------


// Task 2 - Up/down button
toTop.onclick = function (e) {
	e.preventDefault();
	section.scrollTop = 0;
	toTop.hidden = true;
};
// --------- block ---------


// Task 3 - Load visible images
let imgs = [...document.querySelectorAll('img[data-src]')];

function isVisible(imgTop) {
	if (imgTop < document.documentElement.clientHeight) return true;
	return false;
}

function isBelow(imgTop) {
	if (imgTop < document.documentElement.clientHeight * 2) return true;
	return false;
}

function showVisible(img) {
	img.src = img.dataset.src;
}

function showImgs() {
	for (let img of imgs) {
		let coords = img.getBoundingClientRect();
		if (isVisible(coords.top) || isBelow(coords.top)) {
			showVisible(img);
			imgs = imgs.filter(i => i !== img);
			console.log(img.src);
		}
	}
}

showImgs();

document.addEventListener('scroll', function (e) {
	showImgs();
});
// ---3---
