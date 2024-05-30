// Scrolling
window.addEventListener('scroll', function (e) {
	scrollInfo.innerHTML = `Current scroll: ${window.pageYOffset}px`;
});


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


// Task 2 - Up/down button
toTop.onclick = function (e) {
	e.preventDefault();
	section.scrollTop = 0;
	toTop.hidden = true;
};