let square = x => x * x;
let double = x => x * 2;
let half = x => x / 2;
let square_root = x => Math.sqrt(x);

// Ecrivez la fonction lambda compose à l'aide de la fonction reduceRight
let compose = (...tab) => (x) => tab.reduceRight((a,b) => b(a),x); //Si le dernier paramètre nommé fourni à la fonction est préfixé de ... (trois points), il devient un tableau dont les éléments entre 0 (inclus) et lesArguments.length (exclus) sont fournis comme autres arguments à la fonction. (Merci @AlexMoro ;-)

console.log('sqrt((10*10) * 2 / 2) = ' + compose(square_root, half, double, square)(10));