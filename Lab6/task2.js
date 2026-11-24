'use strict'

function comp(...fns) {
    let garb = null;

    const composed = function(x) {
        let res = x

        for (let i = fns.length - 1; i >= 0; i--) {
            try{
                res = fns[i](res)
            }
            catch (error){
                if (garb) {
                    garb(error)
                }
                return undefined
            }
        }
        return res
    }

    composed.on = function(nuhuh, handler) {
        if (nuhuh === 'error') {
            garb = handler
        }
        return composed
    }
}

const divide = x => {
    if (x === 0) {
        throw new Error('Division by zero');
    }
    return 10 / x;
};
const f = comp(
    x => x + 1,
    divide
);

f.on('error', error => {
    console.log('ERROR:', error.message);
});

console.log(f(0));