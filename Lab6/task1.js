'use strict'

function pip(...fns) {

    for (const funk of fns){

        if (typeof funk !== 'function'){
            throw new Error('INVALID')
        }

        return function(x) {

            let res = x

            for (const funk of fns)

        }

    }
}