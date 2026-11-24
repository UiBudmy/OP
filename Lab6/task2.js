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
            }
        }
    }

}