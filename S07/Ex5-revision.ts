let numbers = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste
let minimum = numbers.reduce((min,currenValue) => currenValue<min?currenValue:min);
let maximum = numbers.reduce((max,currenValue) => currenValue>max?currenValue:max);

//let maximum = numbers.// ...
console.log(`Min is ${minimum}, max is ${maximum}`);
//console.log(`Min is ${minimum}`);