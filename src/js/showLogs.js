const store = new Map();
const oldConsole = console;


console = new Proxy(oldConsole, {
	get: (target, prop) => {
		if (prop !== 'log') return target[prop];

		return new Proxy(oldConsole.log, {
			apply: (target, thisArg, args) => {
				const key = args.join(', ');
				store.set(key, args);
				target.apply(thisArg, args);
				
			}
		});
	}
});


function getConsoleLogLine() {
	try {
		throw new Error();
	} catch (err) {
		const match = err.stack.split('\n')[1].match(/:\d*:/)[0];
		return match.slice(1, match.length - 1);
	}
}


// function markLogs(text) {
// 	let logsCounter = 1;
// 	const logs = [];
	
// 	const newText = text.replace(/console.log(.*)/g, str => {
// 		logs.push([ logsCounter, getLogFromStore(str) ]);
// 		return `[${logsCounter++}] ${str}`;
// 	});
// 	return [newText, logs];
// }


// function getLogFromStore(str) {
// 	let argsStr = str.slice(12);
// 	argsStr = argsStr.slice(0, argsStr.lastIndexOf(')'));
// 	let args = eval(`[${argsStr}]`);
// 	return store.get(args.join(', '));
// }


// function createLog(logsArr) {
// 	const container = document.createElement('div');
// 	container.className = 'log';

// 	logsArr.forEach((arr, ind) => 
// 		container.innerHTML += `<div><span>log [${arr[0]}]:</span> ${arr[1] ? prepareArgs(arr[1]).join(', ') : '-'}</div>`)

// 	document.body.append(container);
// }


// function prepareArgs(args) {
// 	return args.map(arg => {
// 		if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
// 		return arg;
// 	});
// }