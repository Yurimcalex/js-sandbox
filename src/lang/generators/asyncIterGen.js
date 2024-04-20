// Async iteration and generators
// Recall iterables
let range = {
	from: 1,
	to: 5,
	[Symbol.iterator]() {
		return {
			curr: this.from,
			end: this.to,
			next() {
				if (this.curr <= this.end) {
					return { done: false, value: this.curr++ };
				} else {
					return { done: true };
				}
			}
		};
	}
};

console.log([...range]);


// Async iterables
let asyncRange = {
	from: 1,
	to: 9,
	[Symbol.asyncIterator]() {
		return {
			curr: this.from,
			last: this.to,
			async next() {
				await new Promise(resolve => setTimeout(resolve, 1000));
				if (this.curr <= this.last) {
					return { done: false, value: this.curr++ };
				} else {
					return { done: true };
				}
			}
		};
	}
};

(async () => {
	for await (let n of asyncRange) {
		console.log(n);
	}
})();


// Recall generators
function* genSeq(start, end) {
	for (let i = start; i <= end; i += 1) {
		yield i;
	}
}

console.log([...genSeq(1, 3)]);


let rangeWithGen = {
	from: 1,
	to: 5,
	*[Symbol.iterator]() {
		for (let i = this.from; i <= this.to; i += 1) {
			yield i;
		}
	}
};

console.log([...rangeWithGen]);