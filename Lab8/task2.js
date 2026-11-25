'use strict'

function store(value) {
    let res = value

    return function() {
        return res
    }
}

const read = store(5);
const value = read();
console.log(value);