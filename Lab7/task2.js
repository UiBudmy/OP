'use strict'

function removeElements(array, ...items) {
    const rem = new Set(items)

    for (let i = array.length - 1; i>=0; i--) {
        if (rem.has(array[i])){
            array.splice(i, 1)
        }
    }
    return array
}



const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 4);
console.log(array);