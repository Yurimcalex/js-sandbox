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