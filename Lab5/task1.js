'use strict'

function seq(... args) {
    const funcs = [args];

    function next(arg) {
        if (typeof arg === 'function')
            funcs.push(arg)
    }
}