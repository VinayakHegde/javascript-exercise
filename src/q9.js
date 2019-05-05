/**
 * How we can preserve immutability of the following list of heroes? 
 */
const heroes = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Magneto', family: 'Marvel', isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true  },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Saruman', family: 'Tolkien', isEvil: true  }
];

/*
const newHeroes = heroes.map(h => {
    h.name = h.name.toUpperCase()
    return h
});
*/

// lets use pure function - that means a function that does not modify the state of the variable out of its scope
// one of such pure functions is Object.assign() - fits good in this situation.

const newHeroes = heroes.map(h => {
    return Object.assign({}, h, {name : h.name.toUpperCase()});
});

// Immutability of the heros preserved. and all newHeros name in upper case.
