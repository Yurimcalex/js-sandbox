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


// Async generators
async function* genSequence(start, end) {
	for (let i = start; i <= end; i += 1) {
		await new Promise(resolve => setTimeout(resolve, 1000));
		yield i;
	}
}

(async () => {
	for await (let n of genSequence(1, 3)) {
		console.log(n, ' <--');
	}
})();


// Async iterable range
let rangeN = {
  from: 1,
  to: 5,
  async *[Symbol.asyncIterator]() {
    for(let value = this.from; value <= this.to; value++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield value;
    }
  }
};

(async () => {
  for await (let value of rangeN) {
    console.log(value, ' <==');
  }
})();


// Real-life example: paginated data
async function* fetchCommits(repo) {
	let url = `https://api.github.com/repos/${repo}/commits`;
	while (url) {
		const response = await fetch(url, {
			headers: { 'User-Agent': 'Our script' },
		});
		const body = await response.json();
		let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
		nextPage = nextPage?.[1];
		url = nextPage;
		for (let commit of body) {
			yield commit;
		}
	}
}

(async () => {
	let count = 0;
	for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
		console.log(commit.author?.login);
		if (++count === 100) {
			break;
		}
	}
})();