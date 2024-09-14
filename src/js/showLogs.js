const logs = [];
const oldConsole = console;


console = new Proxy(oldConsole, {
	get: (target, prop) => {
		if (prop !== 'log') return target[prop];

		return new Proxy(oldConsole.log, {
			apply: (target, thisArg, args) => {
				logs.push(args);
				target.apply(thisArg, args);
			}
		});
	}
});


function markLogs(text) {
	let logsCounter = 1;
	const newText = text.replace(/console.log(.*)/g, str => `[${logsCounter++}] ${str}`);
	return [newText, logsCounter];
}


function createLog(count) {
	const data = logs.splice(0, count - 1);
	const container = document.createElement('div');
	container.className = 'log';

	data.forEach((arr, ind) => 
		container.innerHTML += `<div><span>log [${ind + 1}]:</span> ${arr.join(', ')}</div>`)

	document.body.append(container);
}