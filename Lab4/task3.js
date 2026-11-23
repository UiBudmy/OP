'use strict'

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(necrolog) {
    for (const person in necrolog) {
        console.log(`${person}: ${necrolog[person].died - necrolog[person].born}`);  
    }
}

//console.log(ages(persons));