/*function maximize_3(v){
    if (v > 3)
        return 3;
    else
        return v;
    }
*/
// Fonction Lambda
let maximize_3= v => v>3? 3 :v;
let maximize_4= v => v>4? 4 :v;


/*function maximize_4(10){
    if (v > 4)
        return 4;
    else
        return v;
    }*/
console.log(maximize_3(4))
console.log(maximize_3(2))
console.log(maximize_4(10))
console.log(maximize_4(2))