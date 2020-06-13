var numbers = [100, 34, 5, 67, 72];
// Sans boucle ni récursion, écrivez le code permettant de trouver le min et le max de cette liste
var minimum = numbers.reduce(function (min, currenValue) { return currenValue < min ? currenValue : min; });
var maximum = numbers.reduce(function (max, currenValue) { return currenValue > max ? currenValue : max; });
//let maximum = numbers.// ...
console.log("Min is " + minimum + ", max is " + maximum);
//console.log(`Min is ${minimum}`);
