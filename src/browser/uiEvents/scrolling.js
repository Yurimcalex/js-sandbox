// Scrolling
window.addEventListener('scroll', function (e) {
	scrollInfo.innerHTML = `Current scroll: ${window.pageYOffset}px`;
});


// Task 1 - Endless page
section.addEventListener('scroll', function (e) {
	let currScroll = section.scrollTop;
	let fullScroll = section.scrollHeight - section.clientHeight;
	if (currScroll > fullScroll - 100) {
		section.append(section.children[0].cloneNode(true));
	} 
});

console.log(document.documentElement.getBoundingClientRect());
console.log(document.documentElement.clientHeight);