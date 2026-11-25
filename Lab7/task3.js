'use strict'

function unique(array) {
    let res = []
    for (let i = array.length; i >= 0; i--){
        if (!res.some(array[i])){
            res.push(array[i])
        }
    }
    return res
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);