'use strict'

function inc(x) {
    return x + 1;
}


const a = 10; 
const b = inc(a); 
console.dir({ a, b });

function inc2(num) {
    return num.n += 2;
}

const obj = { n: 9};
inc2(obj);
console.dir(obj);