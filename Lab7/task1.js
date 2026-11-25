'use strict'

function removeElement(array, item) {
    for(const elem of array){
        if(elem == item){
            const index = array.indexOf(item)
            if (index != -1) {
                array.splice(index, 1)
            }
        }
    }
    return array
}

// function removeElement(array, item) {
//     const index = array.indexOf(item)
//     if (index != -1) {
//         array.splice(index, 1)
//     } 
// }

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

const array1 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array1, 'Lima');
removeElement(array1, 'Berlin');
console.log(array1);