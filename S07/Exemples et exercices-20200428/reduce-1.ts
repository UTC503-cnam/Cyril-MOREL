let numbers = [1, 2, 3, 4, 5];
// Somme des valeurs; valeur initiale: 0
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);