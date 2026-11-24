'use strict'

function pipe(...fns) {

    for (const funk of fns){

        if (typeof funk !== 'function'){
            throw new Error('NOT A FUNCTION')
        }

    }
    return function(x) {

            for (const funk of fns){
                x = funk(x)
            }
            return x
        }
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));

const a = pipe(inc, inc)
console.log(a(7));

const b = pipe(7)