// Page: DOMContentLoaded, load, beforeunload, unload
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM is ready!');
	console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
});


// DOMContentLoaded and scripts
let script = document.createElement('script');
script.innerHTML = 'console.log("generated!")';
document.body.append(script);


// window.onload
window.onload = function () {
	console.log('page loaded!');
	console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
};


// window.onunload
let analyticsData = {};
window.addEventListener('unload', function () {
	console.log('leaving');
	navigator.sendBeacon('/analytics', JSON.stringify(analyticsData));
});