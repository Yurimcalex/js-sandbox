let a = 2 + 3;

switch (a) {
	case 3:
		console.log('too small!');
		break;
	case 5:
		console.log('exactly!');
		break;
	case 7:
		console.log('too big!');
	default:
		console.log('unknown value');
}
// --------- block ---------


// task 1
let browser = '';
if (browser === 'Edge') {
	console.log("You've got the Edge!");
} else if ( browser === 'Chrome' ||
            browser === 'Firefox' ||
            browser === 'Safari' ||
            browser === 'Opera' ) {
	console.log('Okay we support these browsers too');
} else {
	console.log('We hope that this page looks ok!');
}
// --------- block ---------


// task 2
let b = +prompt('b?', '');
switch (b) {
	case 0:
		console.log(0);
		break;
	case 1:
		console.log(1);
		break;
	case 2:
	case 3:
		console.log(2, 3);
		break;
}