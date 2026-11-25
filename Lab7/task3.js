'use strict'

function unique(array) {
    const res = []
    const check = new Set(res)

    for (const elem of array){
        if (!check.has(array[elem])){
            res.push[elem]
        }
    }
    return res
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);