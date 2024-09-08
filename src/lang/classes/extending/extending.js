class ReinforcedArray extends Array {
	constructor() {
		super();
	}

	isEmpty() {
		return this.length === 0;
	}
}

let arr = new ReinforcedArray([]);
console.log(arr.isEmpty());

arr = arr.concat([1, 2, 3]).map(n => n * 2);
console.log(arr.isEmpty());


class SuperArray extends Array {
	isEmpty() {
		return this.length === 0;
	}

	static get [Symbol.species]() {
		return Array;
	}
}

let arr1 = new SuperArray([1, 2, 3, 4]);
arr1 = arr1.map(n => n * 3);
//console.log(arr1.isEmpty());