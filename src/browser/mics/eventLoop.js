// Event loop: microtasks and macrotasks
// Use-case 1: splitting CPU-hungry tasks
let c = 0;
let start = Date.now();

function count() {
	for (let i = 0; i < 1e9; i += 1) {
		c++;
	}

	console.log(`Done in ${Date.now() - start}ms`);
}

//count();

function splittedCount() {
	do {
		c++;
	} while (c % 1e6 != 0);

	if (c == 1e9) {
		console.log(`Done in ${Date.now() - start}ms`);
	} else {
		setTimeout(splittedCount);
	}
}

//splittedCount();

function improvedCount() {
	if (c < 1e9 - 1e6) {
		setTimeout(improvedCount);
	}

	do {
		c++;
	} while (c % 1e6 != 0);

	if (c == 1e9) {
		console.log(`Done in ${Date.now() - start}ms`);
	}
}

improvedCount();