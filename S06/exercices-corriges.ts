// Ex1

// Sans lambda
function maximize_3(v){
    if (v > 3)
        return 3;
    else
        return v;
}

function maximize_4(v){
    if (v > 4)
        return 4;
    else
        return v;
}

// En lambda
let maximize_3_lambda = v => v > 3 ? 3 : v;
let maximize_4_lambda = v => v > 4 ? 4 : v;

// Ex2

let tab = [1, 5, 2, 4, 3]
let r = tab.map(x => x * 2);
console.log(tab); // [1, 5, 2, 4, 3]
console.log(r); // [2, 10, 4, 8, 6]
tab.map(x => x * x);
tab.map(x => x > 3 ? 3 : x);

// Ex3

// Fonction d'ordre supérieur sans lambda
function generateur_maximize(m){
    return function(v){
        return v > m ? m : v;
    }
}

// La même fonction d'ordre supérieur, mais en lambda
let generateur_maximize_lambda = m => v => v > m ? m : v;

// Utilisation des fonctions d'ordre supérieur
let maximize_3_os = generateur_maximize(3);
let maximize_4_os = generateur_maximize_lambda(4);

// Quatre appels différents
tab.map(maximize_3_os);
let res = maximize_3_os(10); // 3
res = maximize_3_os(2); // 2
generateur_maximize_lambda(4)(3); // 3 
