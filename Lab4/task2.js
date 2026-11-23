'use strict'

function max(matrix) {
    let max_val = 0;

    for (const line of matrix) {
        for (const num of line) {
            if (num > max_val) {
                max_val = num;
            }
        }
    }
    return max_val;
}

const m = max([ [1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9],
                [10, 11, 12]
            ]);
console.log(m);