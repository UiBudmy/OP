'use strict'

function difference(array1, array2) {
    const rem = new Set(array2)

    for (let i = array1.length - 1; i>=0; i--) {
        if (rem.has(array1[i])){
            array1.splice(i, 1)
        }
    }
    return array1
}


const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);