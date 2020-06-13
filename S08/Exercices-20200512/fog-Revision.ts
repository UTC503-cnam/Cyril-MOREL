// Ecrivez en lambda la fonction de composition f o g 
let fog = f=>g=> x=> f(g(x));

let square = x => x * x;
let double = x => x * 2;

console.log('carré de 10 = ' + square(10));

console.log('double de 10 = ' + double(10));

console.log('f o g (10) = ' + fog(square)(double)(10));
