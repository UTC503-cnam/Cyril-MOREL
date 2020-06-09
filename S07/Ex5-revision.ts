let numbers = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste
let minimum = numbers.reduce((min,currenValue) => min<currenValue?min:currenValue);
let maximum = numbers.reduce((max,currenValue) => max>currenValue?max:currenValue);

//let maximum = numbers.// ...
console.log(`Min is ${minimum}, max is ${maximum}`);
//console.log(`Min is ${minimum}`);