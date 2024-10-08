// Node properties: type, tag and contents
console.log(EventTarget);
console.log(Node);
console.log(Document);
console.log(HTMLDocument);
console.log(CharacterData);
console.log(Text);
console.log(Comment);
console.log(Element);
console.log(HTMLElement);
console.log(HTMLAnchorElement);

console.log(document.body.constructor.name);
console.log(document.body.toString());

console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

//console.dir(document.body);
console.log(document.body);
// ---1---
// --------- block ---------


// The nodeType property
let elem = document.body;
console.log(elem.nodeType, 'body');
console.log(elem.firstChild.nodeType, 'text');
console.log(document.nodeType);
// --------- block ---------


// Tag: nodeName and TagName
console.log(document.body.tagName);
console.log(document.body.nodeName);

console.log(document.tagName);
console.log(document.nodeName);
// --------- block ---------


// innerHTML: the contents
//console.log(container1.innerHTML);
container1.innerHTML = '<div><h1>Heading 1</h1></div>';
container1.innerHTML += '<h2>Heading 2</h2>';
container1.innerHTML += '<script>alert("Ups!")</script>';
// --------- block ---------


// outerHTML: full HTML of the element
//console.log(container1.outerHTML);

let container2 = document.querySelector('.container2');
container2.outerHTML = '<b>something new ...</b>';
//console.log(container2.outerHTML);
console.log(container2, '<==');
// ---3---
// --------- block ---------


// nodeValue/data: text node content
console.log(text.firstChild.data);
console.log(document.body.lastChild.previousSibling.previousSibling.data);

console.log(comment.firstChild.nextSibling.data);
// --------- block ---------


// textContent: pure text
console.log('------------------------------');
console.log(document.body.textContent);

insert1.innerHTML = '<b>Text from a user</b>';
insert2.textContent = '<b>Text from a user</b>';
// --------- block ---------


// The hidden property
comment.hidden = true;

let timer = setInterval(() => {
	//blinking.hidden = !blinking.hidden;
}, 1000);

setTimeout(() => clearInterval(timer), 5000);
// --------- block ---------


// More properties
console.log(input.type);
console.log(input.id);
console.log(input.value);
// --------- block ---------


// Task 1 - Count descendants
list.querySelectorAll('li').forEach(li => {
	console.log(`${li.firstChild.data.trim()} ${li.querySelectorAll('li').length}`);
});
// ---4---
// --------- block ---------


// Task 2 - What is in the nodeType
console.log(document.body.lastChild.nodeType);
// --------- block ---------


// Tag in comment
let body = document.body;
//body.innerHTML = `<!-- ${body.tagName} -->`;
console.log(body.firstChild.data);
// --------- block ---------


// Task 4 - where is the document in the hierarchy
console.log(document.toString());
console.log(document.constructor.name);

console.log(document.parentElement);

console.log(document instanceof Node);
console.log(document instanceof Element);
console.log(document instanceof HTMLElement);