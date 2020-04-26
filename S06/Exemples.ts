let format_devise= d => v => v + " " + d;
let format_dollars = format_devise("$");
let format_euros = format_devise("€");
console.log(format_dollars(10));
console.log(format_dollars(100));
console.log(format_euros(10));
///
let z=100;
function addToZ(x,y){
    return x+y +z;
}
console.log(addToZ(10,20));

///
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10,5);

//

let myAdd = function(x: number, y: number): number { return x + y; };
console.log(myAdd(10,5);
///
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; };
console.log(myAdd(10,5);
///

let myAdd: (baseValue: number, increment: number) => number =   function(x: number, y: number): number { return x + y; };

console.log(myAdd(10,5);

/////
function nombre() {
    return Math.floor(Math.random() * 52);
}
//console.log(nombre());
//i=100;
for (i=100;i>0;i--){
    console.log(nombre());
    } 
////
