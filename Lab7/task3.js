'use strict'

function unique(array) {
    const res = []
    const check = new Set(res)

    for (let i = array.length; i >=0; i--){
        if (!check.has(array[i])){
            res.push[i]
        }
    }
    return res
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);