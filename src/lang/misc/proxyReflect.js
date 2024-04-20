// Proxy and Reflect
// Proxy
let target = {};
let proxy = new Proxy(target, {});
proxy.test = 10;
console.log(target.test, proxy.test);
for (let key in proxy) console.log(key);

