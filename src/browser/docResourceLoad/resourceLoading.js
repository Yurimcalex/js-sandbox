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



// Task 1 - Load images with a callback
function preloadImages(sources, callback) {
	Promise.all(sources.map(src => {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				resolve(img);
			};
			img.onerror = function () {
				reject(new Error('img loading failed'));
			};
		});
	}))
	.then(callback)
	.catch(err => console.log(err));
}

function loaded() {
  console.log("Images loaded");
}

let sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

preloadImages(["1.jpg", "2.jpg", "3.jpg"], loaded);

preloadImages(sources, loaded);