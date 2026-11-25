'use strict'

function unique(array) {
    let res = []
    for (let i = 0; i <= array.length; i++) {
        if (res.includes(array[i])){
            array.splice(i, 1)
        } else {
            res.push(array[i])
        }
    }
    return array
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);