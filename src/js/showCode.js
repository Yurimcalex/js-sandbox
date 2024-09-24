class CodeBlock {
	constructor() {
		this.delimiter = '// --------- block ---------';
		this.scriptAttr = '[data-code]';
	}

	async _getScriptText() {
		const script = document.querySelector(this.scriptAttr);
		return await fetch(script.src).then((res) => res.text());
	}

	_createUI(codeText) {
		const pre = document.createElement('pre');
		const code = document.createElement('code');
		code.className = 'language-javascript';
		pre.append(code);
		code.innerHTML = codeText;
		document.body.append(pre);
		return pre;
	}

	_highlightCode() {
		document.querySelectorAll('pre code')
			.forEach((code) => hljs.highlightElement(code));
	}

	_getCurrLogLineNumbers(logLineNumbers, lineCounter) {
		const result = [];
		logLineNumbers.forEach(ln => {
			if (ln <= lineCounter) result.push(ln);
		});
		logLineNumbers.splice(0, result.length);
		return result;
	}

	_getTargetElement(codeLines) {
		let result = null;
		const lastLine = codeLines[codeLines.length - 2];
		const match = lastLine.match(/---\d*---/);
		if (match) {
			const attribute = match[0].slice(3, -3);
			const elm = document.querySelector(`[data-target='${attribute}']`);
			if (elm) result = elm;
		}
		return result;
	}

	render() {
		document.addEventListener('DOMContentLoaded', async () => {
			const scriptText = await this._getScriptText();

			if (!window['LogBlock']) {
				scriptText.split(this.delimiter)
					.forEach(block => this._createUI(block.trim()));

			} else {
				const logger = new LogBlock(scriptText);
				let lineCounter = 0;
				let lastElement;

				logger.markedScriptText
					.split(this.delimiter)
					.forEach(block => {
						const lines = block.split('\n');
						lineCounter += lines.length - 1;
						// for the last block
						if (lineCounter === logger.markedScriptText.split('\n').length - 1) {
							lineCounter += 1;
						}

						const lns = this._getCurrLogLineNumbers(logger.logLineNumbers, lineCounter);
						
						const target = this._getTargetElement(lines);
						if (target) lastElement = target;
						const codeElement = this._createUI(block.trim());
						if (lastElement) lastElement.after(codeElement);
						
						const logElement = logger.createLogUI(lns.map(ln => [[ln], store[ln]]));
						codeElement.after(logElement);
						lastElement = logElement;
					});
			}

			this._highlightCode();
		});
	}
}


(new CodeBlock()).render();