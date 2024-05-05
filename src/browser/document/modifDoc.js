// Modifying the document
let div = document.createElement('div');
let textNode = document.createTextNode('Here I am');

let div1 = document.createElement('div');
div1.className = 'alert';
div1.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// Insertion methods
document.body.append(div1);

ol.before('before');
ol.after('after');

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst);

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);

div1.after(
	'<p>It will be text only</p>',
	document.createElement('hr')
);