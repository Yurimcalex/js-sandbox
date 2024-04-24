// Bitwise operators
console.log(parseInt('10001001', 2));
console.log(+137..toString(2));

function toBin(dec) {
	return +dec.toString(2);
}

function toDec(bin) {
	return parseInt(bin, 2);
}


console.log(toBin(14), toBin(9), toBin(14 & 9), 14 & 9);


console.log(toBin(14), toBin(9), toBin(14 | 9), 14 | 9);


console.log(toBin(14), toBin(9), toBin(14 ^ 9), 14 ^ 9);


console.log(14 ^ 9 ^ 9);


console.log(~3, ~-1);


console.log(toBin(9), toBin(9 << 2), 9 << 2);
console.log(toBin(10000000000 << 1));


console.log(toBin(9), toBin(9 >> 2), 9 >> 2);
console.log(toBin(-9), toBin(-9 >> 2), -9 >> 2);


console.log(toBin(-9), toBin(-9 >>> 2), -9 >>> 2);