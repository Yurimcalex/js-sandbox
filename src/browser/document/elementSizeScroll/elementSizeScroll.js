// Element size and scrolling
// offsetParent, offsetLeft/Top
console.log(example.offsetParent);
console.log(example.offsetLeft, example.offsetTop);
// offsetWidth/Height
console.log(`width: ${example.offsetWidth}`);
console.log(`height: ${example.offsetHeight}`);

function isHidden(elem) {
	return !(elem.offsetWidth && elem.offsetHeight);
}

console.log(isHidden(example));


// clientTop/Left
console.log(`clientTop: ${example.clientTop}`);
console.log(`clientLeft: ${example.clientLeft}`);


// clientWidth/Height
console.log(`clientWidth: ${example.clientWidth}`)
console.log(`clientHeight: ${example.clientHeight}`);


// scrollWidth/Height
console.log(`scrollWidth: ${example.scrollWidth}`);
console.log(`scrollHeight: ${example.scrollHeight}`);

//setTimeout(() => example.style.height = `${example.scrollHeight}px`, 5000);
//setTimeout(() => example.style.height = '', 7000);


// scrollLeft/scrollTop
console.log(`scrollLeft: ${example.scrollLeft}`);
console.log(`scrollTop: ${example.scrollTop}`);

// let timer = setInterval(() => {
// 	example.scrollTop += 10;
// }, 1000);

// setTimeout(() => {
// 	clearInterval(timer);
// 	console.log(`scrollTop: ${example.scrollTop}`);
// }, 10000);


// Don't take width/height from CSS
console.log(`metric width: ${example.clientWidth}`);
console.log(`computed style width: ${getComputedStyle(example).width}`);

console.log(getComputedStyle(elem).width);


// Task 1 - What's the scroll from the bottom?
function getScrollBottom(elem) {
	return elem.scrollHeight - elem.clientHeight - elem.scrollTop;
}

console.log(getScrollBottom(example));


// Task 2 - What is the scrollbar width?
function getScrollbarWidth() {
	let parent = document.createElement('div');
	let child = document.createElement('div');
	parent.append(child);
	parent.style.height = '100px';
	parent.style.overflow = 'auto';
	child.style.height = '200px';
	document.body.append(parent);
	let width = parent.offsetWidth - parent.clientWidth;
	parent.remove();
	return width;
}

console.log(`Scrollbar width: ${getScrollbarWidth()}`);


// Task 3 Place the ball in the field center
function center(parent, child) {
	child.style.top = (parent.clientHeight / 2) - (child.offsetHeight / 2) + 'px';
	child.style.left = (parent.clientWidth / 2) - (child.offsetWidth / 2) + 'px';
}

center(field, ball);


// Task 4 - The difference: CSS width versus clientWidth
console.log(`clientWidth type: ${typeof example.clientWidth}`);
console.log(`getComputedStyle(elem).width type: ${typeof getComputedStyle(example).width}`);