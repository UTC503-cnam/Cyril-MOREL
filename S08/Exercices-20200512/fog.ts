// Ecrivez en lambda la fonction de composition f o g 
let fog = a => b => x=> a(b(x)) ;

let square = x => x * x;
let double = x => x * 2;

console.log('f o g (10) = ' + fog(square)(double)(10));