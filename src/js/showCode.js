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

	if (!window.markLogs) {
		scriptText.split('// --------- block ---------')
			.forEach(block => createCodeBlock(block.trim()));
	
	} else {
		const [text, logsPosition] = markLogs(scriptText);
		let lineCount = 0;
		let lastElement;

		text
			.split('// --------- block ---------')	
			.forEach(block => {
				const lines = block.split('\n');

				lineCount += block.split('\n').length - 1;

				// for the last block
				if (lineCount === text.split('\n').length - 1) {
					lineCount += 1;
				}

				const pos = [];
				logsPosition.forEach(p => {
					if (p <= lineCount) pos.push(p);
				})
				logsPosition.splice(0, pos.length);




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

				const logElement = createLog(pos.map(p => [[p], store[p]]));
				codeElement.after(logElement);
				lastElement = logElement;
			});
	}

	document.querySelectorAll('pre code')
		.forEach((block) => hljs.highlightElement(block));
});