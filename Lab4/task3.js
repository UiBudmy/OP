'use strict'

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

function ages(necrolog) {
    let res = '';
    for (const person in necrolog) {
        res = (`${person}: ${necrolog[person].died - necrolog[person].born}`);
        console.log(res)
    }
    return res;
}

ages(persons);