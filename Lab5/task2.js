'use strict'

function array() {
    const mass = [];

    function arr(index){
        return mass[index];
    }

    arr.push = function(value){
        mass.push(value);
    }

    arr.pop = function(){
        return mass.pop();
    }

    return arr
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());