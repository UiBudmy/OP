'use strict'

function seq(... args) {
    const funcs = [args];

    function next(arg) {

        if (typeof arg === 'function'){
            funcs.push(arg);
            return next;
        }

        for (let i = funcs.length - 1; i >= 0; i--){
            arg = funcs[i](arg);

        }

        return arg
    }
    
    return next
}

