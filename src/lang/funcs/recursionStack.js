// Two ways of thinking
function pow1(x, n) {
	let result = 1;
	for (let i = 0; i < n; i += 1) {
		result *= x;
	}
	return result;
}

console.log(pow1(2, 3));

function pow2(x, n) {
	if (n === 1) return x;
	else return x * pow2(x, n - 1);
}

console.log(pow2(2, 3));


// Recursive traversals
let company = {
  sales: [{ name: 'John', salary: 1000}, { name: 'Alice', salary: 1600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

function sumSalaries(company) {
	let sum = 0;
	for (let department in company) {
		let team = company[department];
		if (Array.isArray(team)) {
			sum += team.reduce((acc, employee) => acc + employee.salary, 0);
		} else {
			return sum + sumSalaries(team);
		}
	}
	return sum;
}

function sumSalaries2(department) {
	if (Array.isArray(department)) {
		return department.reduce((sal, employee) => sal + employee.salary, 0);
	} else {
		let sum = 0;
		for (let subdep of Object.values(department)) {
			sum += sumSalaries2(subdep);
		}
		return sum;
	}
}

console.log(sumSalaries2(company));


// Recursive structures
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


list = { value: 0, next: list };

function addLinkToEnd(list, link) {
	for (let sub in list) {
		if (!list[sub].next) {
			list[sub].next = link;
		} else {
			addLinkToEnd(list[sub], link);
		}
	}
}
addLinkToEnd(list, { value: 5, next: null });

function removeLink(link, step) {
	if (step === 0) {
		link.next = link.next.next;
		return;
	} else {
		removeLink(link.next, step - 1);
	}
}

removeLink(list, 1);

console.log(list);


// Task 1 - sum all numbers till the given one
function sumTo1(n) {
	let result = n;
	while (n--) result += n;
	return result;
}

function sumTo2(n) {
	if (n === 1) return n;
	return n + sumTo2(n - 1);
}

function sumTo3(n) {
	return n * (1 + n) / 2;
}

console.log(sumTo3(100));