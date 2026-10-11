'use strict';

//пункт 1
function fn(){
    const obj1 = {name: "Danylo"};
    //створюємо об'єкт, який не можна змінювати, але можна змінювати його властивості
    let obj2 = {name: "Danylo"};
    //створюємо об'єкт, який можна змінювати, і його властивості також можна змінювати
    console.dir(obj1); //вивід
    console.dir(obj2); //вивід


    obj1.name = "Danylo2" 
    //значення змінюється, бо ми змінюємо властивість об'єкта, а не сам об'єкт

    obj2.name = "Danylo3"
    //значення змінюється

    console.dir(obj1); //вивід
    console.dir(obj2); //вивід
    

    //obj1 = {name: "Danylo4"}
    //значення не змінюється, бо ми намагаємось змінити сам об'єкт, а не його властивість, виникає помилка

    obj2 = {name: "Danylo5"}
    //значення змінюється


    console.dir(obj1);
    console.dir(obj2);
}

fn()


//пункт 2
function createUser(name, city) {
    return {
        name: name,
        city: city,
    }
}

console.dir(createUser("Danylo", "Kyiv"));