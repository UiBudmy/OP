'use strict'

function unique(array) {
    let res = []
    for (let i = array.length; i >= 0; i--) {
        if (array.includes(array[i])){
            array.splice(i, 1)
        } else {
            res.push(array[i])
        }
    }
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);