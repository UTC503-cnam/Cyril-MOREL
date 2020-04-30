// A refaire

let numbers = [100, 34, 5, 67, 72];
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste

let minimum = numbers.reduce((accumulator, currentValue) => currentValue<accumulator ? currentValue:accumulator);
let maximum = numbers.reduce((accumulator, currentValue) => currentValue>accumulator ? currentValue:accumulator);
console.log(`Min is ${minimum}, max is ${maximum}`);