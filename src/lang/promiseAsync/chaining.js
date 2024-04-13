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