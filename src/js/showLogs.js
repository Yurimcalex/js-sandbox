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

	_prepareLogArgs(arr) {
		return arr.map(arg => {
			if (typeof arg === 'object') return JSON.stringify(arg, null, 2);
			return arg;
		});
	}

	createLogUI(logArgs) {
		const container = document.createElement('div');
		container.className = 'log';

		logArgs.forEach((arr, ind) => container.innerHTML += `
			<div>
				<span>log [${arr[0]}]:</span> ${arr[1] ? this._prepareLogArgs(arr[1]).join(', ') : '-'}
			</div>
		`);

		return container;
	}
}

window['LogBlock'] = LogBlock;


class ToStringConverter {
	_getType(value) {
		let type = typeof value;
		if (type === 'object') {
			if (Array.isArray(value)) {
				type = 'array';
			} else if (value instanceof HTMLElement) {
				type = 'htmlElement';
			} else if (value == null) {
				type = 'null';
			}
		}
		return type;
	}

	_undefinedToStr(value) {
		return 'undefined';
	}

	_nullToStr(value) {
		return 'null';
	}

	_booleanToStr(value) {
		return value.toString();
	}

	_stringToStr(value) {
		return value;
	}

	_numberToStr(value) {
		return value.toString();
	}

	_bigintToStr(value) {
		return `${value.toString()}n`;
	}

	_symbolToStr(value) {
		return value.toString();
	}

	_functionToStr(value) {
		return value.toString();
	}

	_htmlElementToStr(value) {
		let result = `${value.nodeName}`;
		if (value.id) result += `#${value.id}`;
		if (value.className) result += `.${value.className}`;
		let attrs = Objects.entries(value.dataset);
		if (attrs) result += attrs.reduce((acc , [name, v]) =>  acc + `data-${name}=${v}`, '');
		return result;
	}

	_arrayToStr(value) {
		return JSON.stringify(value, (key, val) => {
			return this._toStr(typeof key, val);
		});
	}

	_objectToStr(value) {
		return JSON.stringify(value, (key, val) => {
			return this._toStr(typeof key, val);
		});
	}

	_toStr(type, value) {
		return this[`_${type}ToStr`](value);
	}
}