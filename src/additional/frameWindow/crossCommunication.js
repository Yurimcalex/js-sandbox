// Cross-window communication
// Sane origin
// In action: iframe
iframe.onload = function () {
	let iframeWindow = iframe.contentWindow;
	try {
		let doc = iframe.contentDocument;
		console.log(doc);
	} catch (err) {
		console.log(err);
	}

	try {
		let href = iframe.contentWindow.location.href;
	} catch (err) {
		console.log(err);
	}

	//iframe.contentWindow.location = '/';
	//iframe.onload = null;
};

iframeSame.onload = function () {
	iframeSame.contentDocument.body.prepend('Hello, world!');
};