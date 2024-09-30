// Page: DOMContentLoaded, load, beforeunload, unload
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM is ready!');
	console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
});
// --------- block ---------


// DOMContentLoaded and scripts
let script = document.createElement('script');
script.innerHTML = 'console.log("generated!")';
document.body.append(script);
// --------- block ---------


// window.onload
window.onload = function () {
	console.log('page loaded!');
	console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
};
// --------- block ---------


// window.onunload
let analyticsData = {};
window.addEventListener('unload', function () {
	console.log('leaving');
	navigator.sendBeacon('/analytics', JSON.stringify(analyticsData));
});
// --------- block ---------


// window.onbeforeunload
// window.onbeforeunload = function () {
// 	return false;
// };

window.addEventListener("beforeunload", (event) => {
  event.returnValue = "There are unsaved changes. Leave now?";
});
// --------- block ---------


// readyState
console.log(document.readyState);

document.addEventListener('readystatechange', () => {
	console.log(document.readyState.toUpperCase());
});