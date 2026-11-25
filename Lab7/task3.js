'use strict'

function unique(array) {
    let res = []
    for (let i = 0; i <= array.length - 1; i++) {
        if (!res.includes(array[i])){
            res.push(array[i])
        } else {
            array.splice(i, 1)
        }
    }
    return array
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);