'use strict'

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(necrolog) {
    const res = {};


    for (const name in necrolog) {
        const person = necrolog[name]

        res[name] = person.died - person.born;
    }
    return res;
}

ages(persons);