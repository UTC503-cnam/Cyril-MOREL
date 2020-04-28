let list = [1, 9, 2, 8, 5];
let nombrePair = n => n % 2 == 0;
// Composition des fonctions de filtrage
let result = list.filter(n => nombrePair(n) && n > 4);
console.log(result); // [8]