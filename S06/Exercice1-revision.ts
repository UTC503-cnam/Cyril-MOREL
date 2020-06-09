/*function maximize_3(v){
if (v > 3)
return 3;
else
return v;

}*/

//let maximize_3 = a => b => a<b ? a : b;
let maximize_3= v =>v<3? v:3;
let maximize_4= v =>v<4? v:4;


/*function maximize_4(v){
if (v > 4)
return 4;
else
return v;

}*/

console.log(maximize_3(2))
console.log(maximize_3(10))
console.log(maximize_4(2))
console.log(maximize_4(20))