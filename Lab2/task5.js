'use strict';

const contactArr = [
  {name: "Данило", phone:"+380501234567"},
  {name: "Марія", phone: "+380679547654"},
  {name: "Іван", phone: "+380931112233"},
  {name: 'Marcus Aurelius', phone: '+380445554433'}
];


function findPhoneByName(name) {
    for (const user of contactArr) {
        if (user.name === name) {
            return user.phone;
        }
    }
    return null;
}

// console.dir(findPhoneByName('Marcus Aurelius'))
// console.dir(findPhoneByName('Данило'))
// console.dir(findPhoneByName('Марія'))
// console.dir(findPhoneByName('Іван'))

const guidebook = {
    Данило: '+380501234567',
    Марія: '+380679547654',
    Іван: '+380931112233',
    Marcus: '+380445554433'
}

function findPhoneByNameGuideBook(name) {
    return guidebook[name]
}

console.dir(findPhoneByNameGuideBook('Данило'))
console.dir(findPhoneByNameGuideBook('Іван'))
console.dir(findPhoneByNameGuideBook('Marcus'))
console.dir(findPhoneByNameGuideBook('Марія'))