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


// The nodeType property
let elem = document.body;
console.log(elem.nodeType, 'body');
console.log(elem.firstChild.nodeType, 'text');
console.log(document.nodeType);


// Tag: nodeName and TagName
console.log(document.body.tagName);
console.log(document.body.nodeName);

console.log(document.tagName);
console.log(document.nodeName);


// innerHTML: the contents
console.log(container1.innerHTML);
container1.innerHTML = '<div><h1>Header 1</h1></div>';
container1.innerHTML += '<h2>Header 2</h2>';
container1.innerHTML += '<script>alert("Ups!")</script>';