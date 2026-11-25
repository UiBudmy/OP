'use strict'

function contract(fn, ...types){
    return function(...args){
        if (args.length !== types.length - 1) {
                throw new TypeError('Change number of arguments')
        }

        for (let i = 0; i < args.length; i++) {
            if (!(args[i] instanceof types[i]) && typeof args[i] !== types[i].name.toLowerCase()){
                throw new TypeError('Arguments ${i + 1} has wrong type')

            }
        }
        const res = fn(...args)

        const restype = types[types.length - 1]

        if (!(res instanceof restype) && typeof res !== restype.name.toUpperCase()){
            throw new TypeError('Wrong type of result')
        }
        return res
    }
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); 