'use strict'

//створення масиву
const massive = [
    true,"hello",5,12,-200,
    false,"word",3.14,null,undefined,
    "JavaScript",0, 999,-45.6,true,
    [],{},NaN,"end", 1
]

//створення об'єкта для підрахунку типів
const counter = {
    number: 0,
    boolean: 0,
    string: 0,
    array: 0,
    object: 0,
}

//підрахунок типів даних
for (const item of massive) {
    const type = typeof item
    counter[type]++;
}


//вивід результату
console.dir(counter)


//створення об'єкта для підрахунку типів (динамічний)
const counterDynamic = {}

//підрахунок типів даних (динамічний)
for (const item of massive) {
    const type = typeof item
    if (!counterDynamic[type]) {
        counterDynamic[type] = 0
    }
    counterDynamic[type]++
}

//вивід х2
console.dir(counterDynamic)