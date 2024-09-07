let billion = 1_000_000_000;
let twoBillions = 2e9;
let micro = 1e-6;

let someHex = 0xFF;
let someBin = 0b111;
let someOct = 0o325;

console.log(`
	${someHex.toString(16)} to 10: ${someHex.toString(10)},
	${someBin.toString(2)} to 10: ${someBin.toString(10)},
	${someOct.toString(8)} to 10: ${someOct.toString((10))}
`);


// rounding
let rn = +(Math.random() * 100).toFixed(2);
console.log(`
	random number: ${rn},
	Math.ceil: ${Math.ceil(rn)},
	Math.floor: ${Math.floor(rn)},
	Math.round: ${Math.round(rn)},
	Math.trunc: ${Math.trunc(rn)},
	round*100/100: ${Math.round(rn * 100) / 100},
	toFixed: ${rn.toFixed(1)}
`);


// imprecise calculations
console.log(0.1 + 0.2);


// tests
console.log(isNaN('123'), isNaN('sfd'), isNaN(NaN), isNaN(5));
console.log(NaN === NaN);
console.log(isFinite(NaN), isFinite(Infinity), isFinite('gd13'), isFinite(15));

console.log(Number.isNaN, Number.isFinite);

console.log(
	Object.is(NaN, NaN),
	Object.is(0, -0),
	Object.is(1, 1)
);


// parseInt parseFloat
console.log(
	parseInt('100px'),
	parseInt('fs11'),
	parseInt('234', 8),
	parseInt('0xff', 16),
	parseFloat('12.3.4')
);


// other math funcs
console.log(
	Math.max(1, 2, 4),
	Math.min(3, 4, 1),
	Math.pow(2, 3)
);


// task 1
let un1;
let un2;

// do {
// 	un1 = prompt('a?', '');
// } while (!un1 && !isFinite(un1));

// do {
// 	un2 = prompt('b?', '');
// } while (!un2 && !isFinite(un2));

// console.log(+un1 + +un2);


// task 2
let n = 6.35;
console.log(n.toFixed(1));
console.log(Math.round(n * 10) / 10);


// task 3
function readNumber() {
	let inp;
	do {
		inp = prompt('Enter a number', '');
	} while (inp !== '' && inp !== null && !isFinite(inp));
	return +inp;
}

//console.log(readNumber());


// task 4
function random(min, max) {
	return Math.random() * (max - min) + min;  	
}

//console.log(random(1, 5));


// task 5
function randomNumber(min, max) {
	//return Math.ceil(Math.random() * (max - min)) + min - 1;
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomNumber(1, 5));