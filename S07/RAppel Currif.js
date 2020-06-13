function truncate(len, value) {
    return value.substring(0, len);
}
var chaines = ['Chaine1 très longgue', 'Chaine2 trop longue'];
var res = chaines.map(function (x) { return function (n) { return truncate(n, x); }; });
var n = 5;
console.log(res);
//Comment appliquer truncate à chaines.map(f) qui a�end que f ait un seul paramètre alors que truncate en a deux ?
