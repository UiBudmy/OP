'use strict'

function array() {
    //Створення масиву
    const mass = [];

    //Додавання певного значення в масив
    arr.push = function(value){
        mass.push(value);
    }

    //Пошук елементу за індексом
    function arr(index){
        return mass[index];
    }

    //Видалення елементу з масиву
    arr.pop = function(){
        return mass.pop();
    }

    return arr
}

//Створення масиву
const arr = array();


//Додати елементи
arr.push('first');
arr.push('second');
arr.push('third');

//Вивести елементи
console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

//Видалити елементи та вивести
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

//Фінальна перевірка
console.log(arr.pop());