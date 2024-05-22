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