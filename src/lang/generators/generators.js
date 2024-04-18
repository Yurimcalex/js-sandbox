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


// Using generators for iterables
let range = {
	from: 1,
	to: 5,
	[Symbol.iterator]() {
		return {
			curr: this.from,
			last: this.to,
			next() {
				if (this.curr <= this.last) {
					return { done: false, value: this.curr++ };
				} else {
					return { done: true };
				}
			}
		};
	}
};

console.log([...range]);


let range1 = {
	from: 1,
	to: 7,
	*[Symbol.iterator]() {
		for (let i = this.from; i <= this.to; i += 1) {
			yield i;
		}
	}
};

console.log([...range1]);


// Generator composition
function* gen2(start, end) {
	for (let i = start; i <= end; i += 1) {
		yield i;
	}
}


function* generatePasswordCodes() {
	yield* gen2(48, 57);
	yield* gen2(65, 90);
	yield* gen2(97, 122);
}

let str = '';
for (let code of generatePasswordCodes()) {
	str += String.fromCharCode(code);
}
console.log(str);


function* gen3() {
	yield* genSeq1();
	yield* generateSequence();
}

let numbs1 = [...gen3()];
console.log(numbs1);


// yield is a two-way street
function* gen4() {
	let result = yield '2 + 2 = ?';
	console.log(result);
}

let g = gen4();
let question = g.next().value;
g.next(4);


function* questionsGen() {
	let ask1 = yield '2 + 2 = ?';
	console.log(ask1);
	let ask2 = yield '3 * 3 = ?';
	console.log(ask2);
}

let gq = questionsGen();
gq.next();
gq.next(4);
gq.next(9);


// generator.throw
{
	function* gen() {
		try {
			let result = yield 1;
		} catch(err) {
			console.log(err.message);
		}
	}

	let g = gen();
	g.next();
	g.throw(new Error('Error inside a generator!'));


	function* gen1() {
		let result = yield 'from gen1';
		console.log(result);
	}

	let g1 = gen1();
	g1.next();
	try {
		g1.throw(new Error('Error from gen1'));
	} catch (err) {
		console.log(err.message);
	}
}


// generator.return
{
	function* gen() {
		yield 1;
		yield 2;
		yield 3;
	}

	let g = gen();

	console.log(g.next());
	console.log(g.return('Opapa'));
	console.log(g.next());
}