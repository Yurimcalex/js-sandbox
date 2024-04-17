// Generators
// Generator functions
function* generateSequence() {
	yield 1;
	yield 2;
	return 3;
}

let generator = generateSequence();
console.log(generator.toString());

let one = generator.next();
let two = generator.next();
let three = generator.next();

console.log(JSON.stringify(three));


// Generators are iterable
let gen1 = generateSequence();
for (let value of gen1) {
	console.log(value);
}

function* genSeq1() {
	yield 10;
	yield 20;
	yield 30;
}

for (let v of genSeq1()) {
	console.log(v);
}

let numbs = [0, ...genSeq1()];
console.log(numbs);