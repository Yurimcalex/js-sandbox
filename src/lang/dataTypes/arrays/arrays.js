let queue = [1, 2, 3];
queue.push(4);
queue.shift();
console.log(queue);


let stack = [1, 2, 3];
stack.push(4, 5);
stack.pop();
console.log(stack);


let arr1 = [1, 2, 3, 4, 5];
arr1.unshift(-1, 0);
console.log(arr1);


let arr2 = arr1;
arr2.push(6);
console.log(arr1 === arr2, arr2);


for (let i = 0; i < arr2.length; i += 1) {
	console.log(i, arr2[i]);
}


for (let n of arr2) {
	console.log(n);
}
// --------- block ---------


// task 2
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');

console.log(styles);
// --------- block ---------


// task 4
function sumInput() {
	let sum = 0;
	let inp = [];
	while (true) {
		let ui = prompt('Enter a number', '');
		if (ui === null || ui === '' || !isFinite(ui)) {
			break;
		}
		inp.push(+ui);
	}
	for (let n of inp) {
		sum += n;
	}
	return sum;
}

console.log('sum:', sumInput());
// --------- block ---------


// task 5
// function getMaxSubSum(arr) {
// 	let max = 0;
// 	for (let i = 0; i < arr.length; i += 1) {
// 		let maxSub = 0;
// 		for (let j = i; j < arr.length; j += 1) {
// 			maxSub += arr[j];
// 			max = Math.max(max, maxSub);
// 		}
// 	}
// 	return max;
// }

function getMaxSubSum(arr) {
	let maxSum = 0;
	let subSum = 0;
	for (let n of arr) {
		subSum += n;
		maxSum = Math.max(subSum, maxSum);
		if (subSum < 0) subSum = 0;
	}
	return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) === 5);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) === 3);
console.log(getMaxSubSum([1, 2, 3]) === 6);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
