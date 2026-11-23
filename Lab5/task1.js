'use strict'

function seq(...args) {
    function next(arg) {

        if (typeof arg === 'function'){
            args.push(arg);
            return next;
        }
        
        let res = arg;

        for (let i = args.length - 1; i >= 0; i--){
            res = args[i](res);

        }

        return res;
    }
    return next;
}

console.log(
    seq(x => x + 7)
    (x => x * 2)(5)
)