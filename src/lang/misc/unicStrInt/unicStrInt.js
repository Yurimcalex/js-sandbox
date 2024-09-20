// Unicode, String Internals
console.log('\x7A');
console.log('\xA9');

console.log('\x00', '\xFF');

console.log('\u0021', '\uFFFF');

console.log('\u{20331}', '\u{1F60D}');
// --------- block ---------


// Surrogate pairs
console.log('𝒳'.length);
console.log('😂'.length);
console.log('𩷶'.length);

console.log('𝒳'[0]);
console.log('𝒳'[1]);

console.log('😂'.charCodeAt(0).toString(16));
console.log('😂'.codePointAt(0).toString(16));

console.log('hi 😂'.slice(0, 4));
// --------- block ---------


// Diacritical marks and normalization
console.log('S\u0307');
console.log('S\u0307\u0323');

let s1 = 'S\u0307\u0323';
let s2 = 'S\u0323\u0307';

console.log(s1 == s2);
console.log(s1.normalize() == s2.normalize());

let s3 = 'S\u0307\u0323'.normalize();
console.log(s3.codePointAt(0).toString(16), s3);