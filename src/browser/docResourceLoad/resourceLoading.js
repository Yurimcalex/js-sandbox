// Resource loading: onload and onerror
// Loading a script
let script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";
document.head.append(script);

script.onload = function () {
	console.log(_.VERSION);
};


let script1 = document.createElement('script');
script1.src = "https://somesite.com/404.js";
script1.onerror = function () {
	console.log('Error loading' + this.src);
};


// Other resources
let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif";
img.onload = function () {
	console.log(`Image loaded, size ${img.width}x${img.height}`);
};
img.onerror = function () {
	console.log('Error occured while loading image');
};


// Crossorigin policy
window.onerror = function (message, url, line, col, errorObj) {
	console.log(`${message}\n${url}, ${line}:${col}`);
};
