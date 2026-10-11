'use strict'


const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
function test(iface){
    let result = []
    for (const key in iface) {
        if (typeof iface[key] === 'function'){
            result.push([key, iface[key].length])
        }
    }
    return result;
}


console.dir(test(iface))