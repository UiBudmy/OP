'use strict'

function pipe(...fns) {

    for (const funk of fns){

        if (typeof funk !== 'function'){
            throw new Error('NOT A FUNCTION')
        }

    }
    return function(x) {

            let res = x

            for (const funk of fns){
                res = funk(res)
            }
            return res
        }
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));

const a = pipe(inc, inc)
console.log(a(7));