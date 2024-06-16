// Fetch: Abort
let controller = new AbortController();
let signal = controller.signal;

signal.addEventListener('abort', () => console.log('Canceled!'));
setTimeout(() => {
	controller.abort();
	console.log(signal.aborted)
}, 3000);