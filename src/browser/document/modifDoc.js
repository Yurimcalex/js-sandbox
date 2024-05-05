// Modifying the document
let div = document.createElement('div');
let textNode = document.createTextNode('Here I am');

let div1 = document.createElement('div');
div1.className = 'alert';
div1.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
