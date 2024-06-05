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