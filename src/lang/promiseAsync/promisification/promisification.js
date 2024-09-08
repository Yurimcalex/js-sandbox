// Promisification
function loadScript(src, callback) {
	let script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error('Load error!'));
	docment.head.append(script);
}


function someAsyncFunc(data, callback) {
	setTimeout(() => {
		if (Math.random() > 0.5) callback(null, data);
		else callback(new Error('Some error occured!'));
	}, 1000);
}

function someAsyncFuncPromise(data, callback) {
	return new Promise((resolve, reject) => {
		someAsyncFunc(data, (err, data) => {
			if (err) reject(err);
			else resolve(callback(null, data));
		});
	});
}


someAsyncFunc([1], (err, arg) => {
	if (err) console.log(err);
	else console.log(arg);
});

someAsyncFuncPromise([1], (err, arg) => {
	if (err) console.log(err);
	else console.log(arg);
})
	.then(result => result)
	.catch(err => console.log(err));


function promisify(f) {
	return function (arg, callback) {
		return new Promise((resolve, reject) => {
			f.call(this, arg, (err, result) => {
				if (err) reject(err);
				else resolve(result);
			});
		});
	}
}

promisify(someAsyncFunc)([2], (err, arg) => {
	if (err) console.log(err);
	else console.log(arg);
})
	.then(result => result)
	.catch(err => console.log(err));