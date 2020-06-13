// A faire avant :
// npm i --save lodash
// npm i @types/node
var fp = require('lodash/fp');
var square = function (x) { return x * x; };
var double = function (x) { return x * 2; };
var half = function (x) { return x / 2; };
var square_root = function (x) { return Math.sqrt(x); };
// Utilisez une fonction de lodash pour composer
console.log('sqrt((10*10) * 2 / 2) = ' + fp.compose(10));
