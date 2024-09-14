// task 2
function checkAge(age) {
	return age > 18 ? true : confirm('Did your parents allow you?')
}

function checkAge2(age) {
	return age > 18 || confirm('Did parents allow you?');
}
// --------- block ---------


// task 2
function min(a, b) {
	if (a > b) return b;
	return a;
}
// --------- block ---------


// task 4
function pow(x, n) {
	let result = 1;
	while (n--) result *= x;
	return result;
}

console.log(pow(3, 3));