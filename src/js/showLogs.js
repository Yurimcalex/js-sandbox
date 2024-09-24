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
					if (store[key]) {
						store[key] = [...store[key], ...args];
					} else {
						store[key] = args;
					}
				}			
				target.apply(thisArg, args);
			}
		});
	}
});


class LogBlock {
	constructor(scriptText) {
		this.scriptText = scriptText;
		this.logLineNumbers = this._getLogLineNumbers();
		this.markedScriptText = this._markLogs();
	}

	_getLogLineNumbers() {
		const result = [];
		this.scriptText.split('\n').forEach((line, i) => {
			if (line.includes('console')) {
				result.push(i + 1);
			}
		});
		return result;
	}

	_markLogs() {
		return this.scriptText.split('\n')
			.map((line, i) => {
				if (this.logLineNumbers.includes(i + 1)) {
					return line.replace(/console.log(.*)/g, str => `[${i + 1}] ${str}`);
				} else {
					return line;
				}
			})
			.join('\n');
	}
}


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
	return [text.split('\n').map((line, i) => {
		if (logPositions.includes(i + 1)) {
			return line.replace(/console.log(.*)/g, str => `[${i + 1}] ${str}`);
		} else {
			return line;
		}
	}).join('\n'), logPositions];
}


function createLog(logsArr, target) {
	const container = document.createElement('div');
	container.className = 'log';

	logsArr.forEach((arr, ind) => 
		container.innerHTML += `<div><span>log [${arr[0]}]:</span> ${arr[1] ? prepareArgs(arr[1]).join(', ') : '-'}</div>`)

	if (!target) document.body.append(container);
	return container;
}


function prepareArgs(args) {
	return args.map(arg => {
		if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
		return arg;
	});
}