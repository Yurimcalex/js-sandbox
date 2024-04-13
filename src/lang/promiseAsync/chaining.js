// Promise chaining
new Promise(function (resolve, reject) {
	setTimeout(() => resolve(1), 1000);
}).then(result => {
	console.log(result);
	return result * 2;
}).then(result => {
	console.log(result);
	return result * 4;
}).then(result => {
	console.log(result);
	return result * 8;
});


// Returning promises
new Promise(function (resolve, reject) {
	setTimeout(() => resolve(10), 1500);
}).then(result => {
	console.log(result);
	return new Promise(function (resolve, reject) {
		setTimeout(() => resolve(result * 10), 1000);
	});
}).then(result => {
	console.log(result);
	return new Promise(function (resolve, reject) {
		setTimeout(() => resolve(result * 10), 500);
	});
}).then(result => {
	console.log(result);
});