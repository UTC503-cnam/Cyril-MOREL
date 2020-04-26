let tab = [1, 5, 2, 4, 3]
let mapDouble= x => x *2;
let mapTriple= x => x *3;
let mapSquare= x => x *x;
let mapMaximize3= x => x<3? x: 3;

console.log(tab);
console.log(tab.map(mapDouble));
console.log(tab.map(mapTriple));
console.log(tab.map(mapSquare));
console.log(tab.map(mapMaximize3));