// Fetch: Abort
let controller = new AbortController();
let signal = controller.signal;

signal.addEventListener('abort', () => console.log('Canceled!'));
setTimeout(() => {
	controller.abort();
	console.log(signal.aborted)
}, 3000);


// Using with fetch
async function f() {
	let controller = new AbortController();
	setTimeout(() => controller.abort());

	try {
		let response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
			signal: controller.signal
		});

	} catch (e) {
		if (e.name === 'AbortError') {
			console.log('canceled fetch!');
		} else {
			throw e;
		}
	}
}

f();


// AbortController is scalable
async function g() {
	let url = 'https://jsonplaceholder.typicode.com/todos/';
	let todos = [1, 2, 3, 4, 5];

	let controller = new AbortController();

	let jobs = todos.map(n => fetch(`${url}${n}`, {
		signal: controller.signal
	}));

	let results = await Promise.all(jobs);

	controller.abort();
	console.log('g => ', controller.signal.aborted);
}

g();