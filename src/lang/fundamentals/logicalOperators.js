let age = 39;
if (age >= 14 && age <= 90) {
	console.log('Please enter!');
} else {
	console.log('Not allowed!')
}

if (!(age >= 14 && age <= 90)) {
	console.log('Stop!');
} else {
	console.log('Go!');
}

if (age < 14 || age > 90) {
	console.log('You are not our client!');
} else {
	console.log('Wellcome!');
}

// check the login
let login = prompt('Enter login', '');

if (login === 'Admin') {

	let password = prompt('Enter password', '');

	if (password === 'TheMaster') {
		console.log('Welcome!');
	} else if (password) {
		console.log('Wrong password');
	} else {
		console.log('Canceled');
	}

} else if (login) {
	console.log('I dont know you');
} else {
	console.log('Canceled');
}