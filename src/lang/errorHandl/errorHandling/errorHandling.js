try {
	console.log('no errors here!');
} catch (err) {
	console.log('there is an error!');
}

try {
	someErrorCode;
} catch (err) {
	console.log('Error has occurred!');
}


// try ... catch work synchronously
try {
	//setTimeout(() => someBadCode, 1000);
} catch (err) {
	console.log('something goes wrong!');
}


setTimeout(() => {
	try {
		someBadCode;
	} catch (err) {
		console.log('error is caught here!');
	}
}, 1000);


// Error object
try {
	opapa();
} catch (err) {
	console.dir(err);
}


// Throwing our own errors
let json = '{ "age": 30 }';
try {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new SyntaxError('Incomplete data: no name');
	}
	console.log(user.name);
} catch (err) {
	console.log('JSON Error:' + err.message);
}


// Rethrowing
let userJSON = '{ "age": 30 }';
try {
	let user = JSON.parse(userJSON);
	if (!user.name) {
		throw new SyntaxError('Incomplete data: no name');
	}

	whatIsGoingOn();
	console.log(user.name);
} catch (err) {
	if (err instanceof SyntaxError) {
		console.log('JSON Error: ' + err.message);
	} else {
		throw err;
	}
}


try {

} catch (err) {
	console.log("didn't catch the prev err");
}


function someFunc() {
	try {
		opapa;
	} catch (err) {
		if (!(err instanceof SyntaxError)) {
			throw err;
		}
	}
}

try {
	someFunc();
} catch (err) {
	console.log('Inner err is catched!');
}

console.log('...rest of the code');


function func() {
  try {
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    console.log('finally');
  }
}

console.log(func());


window.onerror = function(message, url, line, col, error) {
  console.log('Uncought error will be there!');
  console.log(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc();
}

readData();