'use strict'

function contract(fn, ...types){
    return function(...args){
        if (args.length !== types.length - 1) {
                throw new TypeError('ERROR')
        }
    }
}