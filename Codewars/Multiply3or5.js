//Cyril A finir
var limit = 10;
//var multiples[]=[3,5]
var a = 3;
var b = 5;
var array1 = null;
function multiple(nb) {
    if (nb % a == 0 || nb % 5 == 0) {
        return true;
    }
    /*    if (number%3==0){
          return "fizz"
        }
        if (number%5==0){
          return "buzz"
        }*/
}
var test = 5;
console.log(test + " est-il un multiple de 3 ou de 5? " + multiple(test));
function listNatural(limit) {
    var i = 0;
    if (limit == 0) {
        return array1;
    }
    else
        array1[i] = limit;
    limit--;
    return listNatural(limit);
}
/*while (i>0){
    i--;
    listNatural(i);
    return i;
  }
}*/
//console.log("Liste : "+ listNatural(5));
function sum(limit) {
    var n = 0;
    while (limit > 0) {
        n = n + limit;
        limit--;
    }
    return n;
}
console.log("Somme cumulée: " + sum(20));
/*function m(number){
    if (number%3==0 & number%5==0){
      return "FizzBuzz"
    }
    if (number%3==0){
      return "fizz"
    }
    if (number%5==0){
      return "buzz"
    }
  
  }
  let nb = 10;
  console.log(fizzbuz(nb));
  /*A TEster
   case
    math.mod()*/ 
