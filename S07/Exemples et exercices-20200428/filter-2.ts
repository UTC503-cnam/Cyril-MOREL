let list = [1, 9, 2, 8, 5];
let nombrePair = n => n % 2 == 0;
// Chaînage de filter
let result = list.filter(nombrePair).filter(n => n > 4);
console.log(result); // [8]