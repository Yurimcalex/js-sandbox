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