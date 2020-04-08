//Cyril

function fizzbuz(number){
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