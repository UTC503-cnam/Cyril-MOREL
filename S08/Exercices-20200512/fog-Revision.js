// Ecrivez en lambda la fonction de composition f o g 
var fog = function (f) { return function (g) { return function (x) { return f(g(x)); }; }; };
var square = function (x) { return x * x; };
var double = function (x) { return x * 2; };
console.log('carré de 10 = ' + square(10));
console.log('double de 10 = ' + double(10));
console.log('f o g (10) = ' + fog(square)(double)(10));
