// Selection and Range
// Range
let range = new Range();
range.setStart(text.firstChild, 0);
range.setEnd(text.firstChild, 4);
console.log(range.toString());


// Selecting element nodes
let pRange = new Range();
pRange.setStart(p, 0);
pRange.setEnd(p, 2);
console.log(pRange.toString());
document.getSelection().addRange(pRange);


// Selecting a bigger fragment
let pRange1 = new Range();
pRange1.setStart(p1.firstChild, 2);
pRange1.setEnd(p1.querySelector('b').firstChild, 3);
console.log(pRange1.toString());
window.getSelection().addRange(pRange1);


// Range properties
let { 
	startContainer,
	startOffset,
	endContainer,
	endOffset,
	collapsed,
	commonAncestorContainer
} = pRange1;

console.log(startContainer, startOffset);
console.log(endContainer, endOffset);
console.log(collapsed, commonAncestorContainer);


// Range selection methods
let pRange2 = new Range();
//pRange2.setStartAfter(p2.children[0]);
//pRange2.setEndBefore(p2.children[1]);
//pRange2.selectNode(p2);
pRange2.selectNodeContents(p2);
setTimeout(() => {
	pRange2.collapse(true);
}, 3000);
window.getSelection().addRange(pRange2);


// Range editing methods
let pRange3 = new Range();
pRange3.selectNode(p3.children[0]);
window.getSelection().addRange(pRange3);
setTimeout(() => {
	//pRange3.deleteContents();
	//let elm = pRange3.extractContents();
	//let elm = pRange3.cloneContents();
	let elm = document.createElement('h3');
	elm.textContent = 'text';
	//pRange3.insertNode(elm);
	pRange3.surroundContents(elm);
	//document.body.append(elm);
}, 3000);


// Selection
document.onselectionchange = function () {
	let selection = document.getSelection();
	//console.log(selection);
	let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
	// console.log(`
	// 	anchorNode: ${anchorNode},
	// 	anchorOffset: ${anchorOffset},
	// 	focusNode: ${focusNode},
	// 	focusOffset: ${focusOffset}
	// `);	
};


// Selection copying demo
document.addEventListener('selectionchange', function () {
	let selection = document.getSelection();
	cloned.innerHTML = astext.innerHTML = '';
	for (let i = 0; i < selection.rangeCount; i += 1) {
		cloned.append(selection.getRangeAt(i).cloneContents());
	}
	astext.innerHTML += selection;
});


// selection methods
document.getSelection().removeAllRanges();
document.getSelection().setBaseAndExtent(p4, 0, p4, p4.childNodes.length);


// Selection in form controls
area.onselect = function () {
	console.log(`
		selectionStart: ${area.selectionStart},
		selectionEnd: ${area.selectionEnd}
	`);
};


// Example: moving cursor
area1.onfocus = () => {
	setTimeout(() => {
		area1.selectionStart = area1.selectionEnd = 10;
	});
};