var square = function (x) { return x * x; };
var double = function (x) { return x * 2; };
var half = function (x) { return x / 2; };
var square_root = function (x) { return Math.sqrt(x); };
// Ecrivez la fonction lambda compose à l'aide de la fonction reduceRight
//let a=10;
//let compose(x:number) = a => b => c => d => x => x.reduceRight(a, b, c, d);
var x = 10;
var tab = [square_root, half, double(x), square(x)];
//let compose= tab => x => x.reduceRight(square_root, half, double, square);
//console.log('sqrt((10*10) * 2 / 2) = ' + compose(square_root, half, double, square)(10));
//let myFunc = total => num => total * num;
function myFunc(total, num) {
    return total * num;
}
console.log("tab : " + tab);
console.log("résultat: " + tab.reduceRight(myFunc));
