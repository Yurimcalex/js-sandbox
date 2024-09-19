// Custom errors, extending Error
// Extending Error
class MyError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

class ValidationError extends MyError {}


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
// --------- block ---------


// Further inheritance
class PropertyRequiredError extends ValidationError {
	constructor(property) {
		super('No property: ' + property);
		this.property = property;
	}
}

function readUser_1(json) {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new PropertyRequiredError('name');
	}
	if (!user.age) {
		throw new PropertyRequiredError('age');
	}
	return user;
}

try {
	let user = readUser_1('{ "name": "Bob" }');
} catch (err) {
	if (err instanceof ValidationError) {
		console.log('Invalid data: ' + err.message);
		console.log(err.name, err.property);
	} else if (err instanceof SyntaxError) {
		console.log('JSON syntax error ' + err.message);
	} else {
		throw err;
	}
}
// --------- block ---------


// Wrapping exeptions
class ReadError extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = 'ReadError';
	}
}

function validateUser(user) {
	if (!user.age) {
		throw new PropertyRequiredError('age');
	}
	if (!user.name) {
		throw new PropertyRequiredError('name');
	}
}

function readUser_2(json) {
	let user;
	try {
		user = JSON.parse(json);
	} catch (err) {
		if (err instanceof SyntaxError) {
			throw new ReadError('Syntax Error', err);
		} else {
			throw err;
		}
	}

	try {
		validateUser(user);
	} catch (err) {
		if (err instanceof ValidationError) {
			throw new ReadError('Validation Error', err);
		} else {
			throw err;
		}
	}
}

try {
	readUser_2('{ ... }');
} catch (err) {
	if (err instanceof ReadError) {
		console.log('Original eror: ' + err.cause);
	} else {
		throw err;
	}
}
// --------- block ---------


// Task 1 - Inherit from SyntaxError
class FormatError extends SyntaxError {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

let err = new FormatError("formatting error");

console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true