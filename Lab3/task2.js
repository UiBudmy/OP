'use strict'

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';



function generateKey(lenght, characters) {
    let key = '';
    for (let i = 0; i < lenght; i++) {
        const randindex = Math.floor(Math.random() * characters.length);
        key += characters[randindex]
    }
    return key
}

const res = generateKey(20, characters)
console.dir(res)