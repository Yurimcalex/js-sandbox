const store = {};
const oldConsole = console;


console = new Proxy(oldConsole, {
	get: (target, prop) => {
		if (prop !== 'log') return target[prop];

		return new Proxy(oldConsole.log, {
			apply: (target, thisArg, args) => {
				try {
					throw new Error();
				} catch (err) {
					const match = err.stack.split('\n')[1].match(/:\d*:/)[0];
					const key = match.slice(1, match.length - 1);
					store[key] = args;
				}			
				target.apply(thisArg, args);
			}
		});
	}
});


function findLogs(text) {
	const logPositions = [];
	text.split('\n').forEach((line, i) => {
		if (line.includes('console')) {
			logPositions.push(i + 1);
		}
	});
	return logPositions;
}


function markLogs(text) {
	const logPositions = findLogs(text);
	oldConsole.log(logPositions);
	return text.split('\n').map((line, i) => {
		if (logPositions.includes(i + 1)) {
			return line.replace(/console.log(.*)/g, str => `[${i + 1}] ${str}`);
		} else {
			return line;
		}
	});
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