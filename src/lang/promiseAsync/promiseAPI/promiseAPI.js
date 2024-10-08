// Promise API
// Promise.all
Promise.all([
	new Promise(resolve => setTimeout(() => resolve(10), 1000)),
	new Promise(resolve => setTimeout(() => resolve(100), 2000)),
	new Promise(resolve => setTimeout(() => resolve(1000), 3000))
]).then(results => console.log(results));


let urls = [
	'https://jsonplaceholder.typicode.com/todos/1',
	'https://jsonplaceholder.typicode.com/todos/2',
	'https://jsonplaceholder.typicode.com/todos/3'
];
let requests = urls.map(url => fetch(url));
Promise.all(requests)
	.then(responses => {
		return Promise.all(responses.map(response => response.json()));
	})
	.then(todos => console.log(todos));


let names = ['iliakan', 'remy', 'jeresig'];
let reqs = names.map(name => fetch(`https://api.github.com/users/${name}`));
Promise.all(reqs)
	.then(responses => {
		responses.forEach(response => console.log(response.url, response.status));
		return responses;
	})
	.then(responses => Promise.all(responses.map(r => r.json())))
	.then(users => console.log(users));


Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error('Opa!')), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
])
 .catch(err => console.log(err.message));


Promise.all([
	new Promise(resolve => setTimeout(() => resolve(1), 1000)),
	2,
	3
]).then(results => console.log(results));
// --------- block ---------


// Promise.allSettled
let userUrls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(userUrls.map(url => fetch(url)))
	.then(results => {
		let success = [];
		results.forEach((res, ind) => {
			if (res.status === 'fulfilled') {
				success.push(res.value);
			}
			if (res.status === 'rejected') {
				console.log(userUrls[ind], res.reason);
			}
		});
		return success;
	})
	.then(resps => Promise.all(resps.map(r => r.json())))
	.then(users => console.log(users));
// --------- block ---------


// Polyfill
if (!Promise.allSettled) {
	const rejectHandler = reason => ({ status: 'rejected', reason });
	const resolveHandler = value => ({ status: 'fulfilled', value });
	Promise.allSettled = function (promises) {
		const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
		return Promise.all(convertedPromises);
	};
}
// --------- block ---------


// Promise.race
Promise.race([
	new Promise(resolve => setTimeout(() => resolve(1), 1000)),
	new Promise(resolve => setTimeout(() => resolve(2), 500)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error('Err!')), 2000))
])
	.then(winner => console.log(winner));
// --------- block ---------


// Promise.any
Promise.any([
	new Promise((resolve, reject) => setTimeout(() => reject(new Error('Err!')), 500)),
	new Promise(resolve => setTimeout(() => resolve(10), 1000)),
	new Promise(resolve => setTimeout(() => resolve(20), 2000))
])
	.then(firstFulfilled => console.log(firstFulfilled));


Promise.any([
	new Promise((resolve, reject) => setTimeout(() => reject(new Error('Err-1!')), 500)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error('Err-2!')), 1000))
])
	.catch(error => {
		console.log(error.constructor.name);
		console.log(error.errors[0]);
		console.log(error.errors[1]);
	});
// --------- block ---------


// Promise.resolve/reject
let cache = new Map();

function loadCached(url) {
	if (cache.has(url)) {
		return Promise.resolve(cache.get(url));
	}

	return fetch(url)
		.then(response => response.json())
		.then(data => {
			cache.set(url, data);
			return data;
		});
}