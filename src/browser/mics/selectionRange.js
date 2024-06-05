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