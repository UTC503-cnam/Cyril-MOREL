let list = [1, 9, 2, 8, 5];
let nombrePair = n => n % 2 == 0;

let and = x => y => n=>  x(n) && y(n);

//let max = n => n > 4;
//let and = max => nombrePair => max && nombrePair;

// Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner

//console.log(list); // [ 1, 9, 2, 8, 5 ]
//console.log(list.filter(n => n > 4)); // [ 9, 8, 5 ] 
//console.log(list.filter(nombrePair)); // [ 2, 8 ]

let result = list.filter(and(nombrePair)(n => n > 4));
//let result = list.filter(and (a,b));
console.log(result); // [8]