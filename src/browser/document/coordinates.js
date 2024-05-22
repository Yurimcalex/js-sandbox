// Coordinates
// Element coordinates: getBoundingClientRect
let coords = example.getBoundingClientRect();
console.log(coords);


// elementFromPoint(x, y)
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

console.log(elem);