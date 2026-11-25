'use strict'

function unique(array) {
    const res = []

    for (let i = array.length; i >=0; i--){
        if (!res.has(array[i])){
            res.push[i]
        }
    }
    return res
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);