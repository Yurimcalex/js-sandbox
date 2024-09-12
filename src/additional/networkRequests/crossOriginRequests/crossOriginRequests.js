// Fetch: Cross-Origin Requests
async function f() {
	try {
		await fetch('http://example.com');
	} catch (err) {
		console.log(err);
	}
}

//f();

