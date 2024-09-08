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


// Error handling
async function f3() {
	try {
		let response = await fetch('nowhere!');
		let result = await response.json();
	} catch (err) {
		console.log(err.message);
	}
}

f3();


async function f4() {
	let response = await fetch('does not exist');
}

f4().catch(err => console.log(err.message));


// Task 1 - Rewrite using async/await
async function loadJson(url) {
	let response = await fetch(url);
	if (response.status === 200) {
		return await response.json();
	}
	throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(err => console.log(err.toString()));


// Task 2 - Rewrite rethrow with async/await
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJSON(url) {
	let response = await fetch(url);
	if (response.status === 200) {
		return await response.json();
	}
	throw new HttpError(response);
}

async function demoGithubUser() {
	let user;
	while (true) {
		let name = prompt("Enter a name?", "iliakan");
		try {
			user = await loadJSON(`https://api.github.com/users/${name}`);
			break;
		} catch (err) {
			if (err instanceof HttpError && err.response.status === 404) {
				console.log('No such user, please reenter.');
			} else {
				throw err;
			}
		}
	}

	console.log(user);
	return;
}

demoGithubUser();


// Task 3 - Call async from non-async
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f5() {
	wait().then(result => console.log(result * 1000));
}

f5();