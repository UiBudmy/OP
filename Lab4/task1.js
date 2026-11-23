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
    let sum = 0;
    Array.prototype.reduce()

}


let res1 = sum1(1, 2, 3);
console.dir(res1);

let res2 = sum2(0);
console.dir(res2);

let res3 = sum3();
console.dir(res3);

let res4 = sum4(1, -1, 1);
console.dir(res4);

