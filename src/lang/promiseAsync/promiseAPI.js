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