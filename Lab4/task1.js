'use strict'


function sum1(...args) {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}


function sum2(...args) {
    let sum = 0;

    for (const num of args) {
        sum += num;
    }
    return sum;
}

function sum3(...args) {
    let sum = 0;

    while (args.length > 0) {
        let num = args.pop();
        sum += num;
    }
    return sum;
}

function sum4(...args) {
    let sum = 0;

    do {
        let num = args.pop();
        sum += num;
    } while (args.length > 0) 
    return sum;
}

function sum5(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}


const a = sum1(1, 2, 3);
console.dir("a: ", a);

const b = sum2(0);
console.dir("b: ", b);

const c = sum3();
console.dir("c: ", c);

const d = sum4(1, -1, 1);
console.dir("d: ", d);

const e = sum5(10, -1, -1, -1);
console.dir("e: ", e);