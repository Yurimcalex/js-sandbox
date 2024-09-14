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