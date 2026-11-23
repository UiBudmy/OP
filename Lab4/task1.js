'use strict'


function sum1(...args) {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

let res1 = sum1(1, 2, 3);
console.dir(res1);

// function sum2(...args) {
//     let sum = 0;

//     for 