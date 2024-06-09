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

//improvedCount();


// Use case 2: progress indication
function count1() {
	for (let i = 0; i < 1e6; i += 1) {
		i++;
		progress.innerHTML = i;
	}
}

//count1();

let i = 0;
function splittedCount1() {
	do {
		i++;
		progress.innerHTML = i;
	} while (i % 1e3 != 0);

	if (i < 1e7) {
		setTimeout(splittedCount1);
	}
}

//splittedCount1();


// Use case 3: doing something after the event
menu.onclick = function () {
	let customEvent = new CustomEvent('menu-open', {
		bubbles: true
	});

	setTimeout(() => menu.dispatchEvent(customEvent));
};


// Makrotasks and Microtasks
setTimeout(() => console.log('timeout'));
Promise.resolve().then(() => console.log('promise'));
console.log('code');

console.log(queueMicrotask);