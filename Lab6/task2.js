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
        
    }
    return composed
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = comp(inc, twice, cube);
console.log(f(5));
const a = comp(8)
a.on('error', (err) => {
    console.log('INVALID', err.message)
})
console.log(a(5))