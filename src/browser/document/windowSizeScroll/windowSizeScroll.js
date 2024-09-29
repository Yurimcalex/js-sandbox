// Window size and scrolling
// Width/height of the window
let html = document.documentElement;

console.log(html.clientWidth, html.clientHeight);
console.log(window.innerWidth, window.innerHeight);
// --------- block ---------


// Width/height ofthe document
function getDocumentScrollHeight() {
	return Math.max(
  	document.body.scrollHeight, document.documentElement.scrollHeight,
  	document.body.offsetHeight, document.documentElement.offsetHeight,
  	document.body.clientHeight, document.documentElement.clientHeight
	);
}

console.log(getDocumentScrollHeight());
// --------- block ---------


// Get the current scroll
let scrollX = window.pageXOffset;
let scrollY = window.pageYOffset;

console.log(`Scroll top: ${scrollY}, Scroll left: ${scrollX}`);
// --------- block ---------


// Scrolling: scrollTo, scrollBy, scrollIntoView
// setTimeout(() => {
// 	window.scrollBy(0, 20);
// 	setTimeout(() => {
// 		window.scrollTo(0, 0);
// 	}, 1000);
// }, 3000);
// --------- block ---------


// scrollIntoView
elem.scrollIntoView(true);
// --------- block ---------


// Forbid the scrolling
example.style.overflow = 'hidden';