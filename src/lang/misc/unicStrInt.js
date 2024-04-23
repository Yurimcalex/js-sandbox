// Unicode, String Internals
console.log('\x7A');
console.log('\xA9');

console.log('\x00', '\xFF');

console.log('\u0021', '\uFFFF');

console.log('\u{20331}', '\u{1F60D}');


// Surrogate pairs
console.log('𝒳'.length);
console.log('😂'.length);
console.log('𩷶'.length);

console.log('𝒳'[0]);
console.log('𝒳'[1]);

console.log('😂'.charCodeAt(0).toString(16));
console.log('😂'.codePointAt(0).toString(16));

console.log('hi 😂'.slice(0, 4));