let letters = ['e', 'm', 'i', 'r'];
let reverse = letters.reduce((rev, letter) => [letter].concat(rev), []);
console.log(reverse); // [ 'r', 'i', 'm', 'e' ]