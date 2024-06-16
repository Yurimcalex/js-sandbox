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