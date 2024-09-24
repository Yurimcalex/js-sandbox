async function getScriptContent() {
	const script = document.querySelector('[data-code]');
	return await fetch(script.src).then((res) => res.text());
}


function createCodeBlock(blockText, target) {
	const pre = document.createElement('pre');
	const code = document.createElement('code');
	code.className = 'language-javascript';
	pre.append(code);
	code.innerHTML = blockText;
	if (!target)  document.body.append(pre);
	return pre;
}

document.addEventListener('DOMContentLoaded', async (event) => {
	const scriptText = await getScriptContent();

	if (!window['LogBlock']) {
		scriptText.split('// --------- block ---------')
			.forEach(block => createCodeBlock(block.trim()));

	} else {
		const logger = new LogBlock(scriptText);
		let lineCounter = 0;
		let lastElement;

		logger.markedScriptText
			.split('// --------- block ---------')
			.forEach(block => {
				const lines = block.split('\n');
				lineCounter += lines.length - 1;
				// for the last block
				if (lineCounter === logger.markedScriptText.split('\n').length - 1) {
					lineCounter += 1;
				}

				const lns = [];
				logger.logLineNumbers.forEach(ln => {
					if (ln <= lineCounter) lns.push(ln);
				});
				logger.logLineNumbers.splice(0, lns.length);

				const lastLine = lines[lines.length - 2];
				const match = lastLine.match(/---\d*---/);
				if (match) {
					const attribute = match[0].slice(3, -3);
					const elm = document.querySelector(`[data-target='${attribute}']`);
					if (elm) lastElement = elm;
				}

				const codeElement = createCodeBlock(block.trim());

				if (lastElement) {
					lastElement.after(codeElement);
				}

				const logElement = logger.createLogUI(lns.map(ln => [[ln], store[ln]]));
				codeElement.after(logElement);
				lastElement = logElement;
			});
	}

	document.querySelectorAll('pre code')
		.forEach((code) => hljs.highlightElement(code));
});