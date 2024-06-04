// Resource loading: onload and onerror
// Loading a script
let script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";
document.head.append(script);

script.onload = function () {
	console.log(_.VERSION);
};