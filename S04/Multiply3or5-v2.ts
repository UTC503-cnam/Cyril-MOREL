//Cyril
var limit=10;
//var multiples[]=[3,5]
var a=3;
var b=5;
var tableau:number[];

function sum(){
    var result:number=0;
    var i =limit;
    while (i>0){
        if (i%a==0){
            result=result + i;
            i--;   }
            else if (i%b==0){
                result=result + i;
                i--;   }                          
        console.log(result);}
  }
  //console.log(fizzbuz(nb));
  /*A TEster 
   case 
    math.mod()*/