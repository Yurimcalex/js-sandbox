async function getScriptContent() {
	const script = document.querySelector('[data-code]');
	return await fetch(script.src).then((res) => res.text());
}


function createCodeBlock(blockText) {
	const pre = document.createElement('pre');
	const code = document.createElement('code');
	code.className = 'language-javascript';
	pre.append(code);
	code.innerHTML = blockText;
	document.body.append(pre);
}


document.addEventListener('DOMContentLoaded', async (event) => {
	const scriptText = await getScriptContent();
	const [text, logsPosition] = markLogs(scriptText);
	
	let lineCount = 0;
	text
		.split('// --------- block ---------')	
		//.map(block => block.trim())
		.forEach(block => {
			createCodeBlock(block);

			lineCount += block.split('\n').length + 1;
			const pos = [];
			logsPosition.forEach(p => {
				if (p <= lineCount) pos.push(p);
			})
			logsPosition.splice(0, pos.length);
			createLog(pos.map(p => [[p], store[p]]));
		});
	
	document.querySelectorAll('pre code')
		.forEach((block) => hljs.highlightElement(block));
});