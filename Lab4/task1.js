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
    while (args.length > 0) {
        let num = args.pop();
        sum += num;
    }
    return sum;
}






let res1 = sum1(1, 2, 3);
console.dir(res1);

let res2 = sum2(2, 2, 3);
console.dir(res2);

let res3 = sum3(3, 2, 3);
console.dir(res3);