'use strict';


//пункт 1
function range(start, end) {
    if (start < end){
        let arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }
}

const res = range(15, 30);
console.dir(res);



//пункт 2
function rangeOdd(start, end) {
    if (start < end){
        let arr = [];
        for (let i = start; i <= end; i++) {
            if (!(i % 2 == 0)) {
                arr.push(i);
            }
        }
        return arr;
    }
}

const resOdd = rangeOdd(15, 30);
console.dir(resOdd);