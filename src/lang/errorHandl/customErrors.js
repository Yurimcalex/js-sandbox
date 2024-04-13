// Custom errors, extending Error
// Extending Error
class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'ValidationError';
	}
}


function test() {
	throw new ValidationError('Lallallaa');
}

try {
	test();
} catch (err) {
	console.log(err.name, err.message, err.stack);
}


function readUser(json) {
	let user = JSON.parse(json);
	if (!user.age) {
		throw new ValidationError('No field: age');
	}
	if (!user.name) {
		throw new ValidationError('No field: name');
	}
	return user;
}

try {
	let user = readUser('{ "age": 25 }');
} catch (err) {
	if (err instanceof ValidationError) {
		console.log('Invalid data ' + err.message);
	} else if (err instanceof SyntaxError) {
		console.log('JSON syntax error ' + err.message);
	} else {
		throw err;
	}
}