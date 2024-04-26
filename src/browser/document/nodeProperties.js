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