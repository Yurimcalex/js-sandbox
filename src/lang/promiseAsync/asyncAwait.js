// Async/await
async function f() {
	return 10;
}

f().then(result => console.log(result));

async function g() {
	return Promise.resolve(15);
}

g().then(result => console.log(result));


async function f1() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(1), 1000);
	});

	let result = await promise;
	console.log('awaited result: ', result);
}

f1();


async function getUsers() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	let users = await response.json();
	await new Promise(resolve => setTimeout(() => resolve(), 1000));
	console.log(users);
}

getUsers();


(async function () {
	await new Promise(resolve => setTimeout(() => resolve(), 3000));
	console.log('after 3 seconds ...')
})();


let o = {
	x: 1000,
	then(resolve, reject) {
		setTimeout(() => resolve(this.x), 1000);
	}
};

async function f2() {
	console.log(await o);
}

f2();


class Waiter {
	async wait() {
		return await Promise.resolve(20);
	}
}

new Waiter()
	.wait().then(result => console.log(result));