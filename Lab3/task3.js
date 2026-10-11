'use strict'

function IpInt(ip) {
    const num = ip.split('.')
    return num.reduce((result, byte, index) => {
            return result + (byte << (8 * (3 - index)));
        }, 0);

}

const res = IpInt('127.0.0.1')
console.dir(res)

