// Retourne x si non nul, defaut sinon.
// x et defaut sont des nombres.
function defautSiNul(x: number, defaut: number): number {
    if (x == null)
        return defaut;
    else
        return x;
}

let maValeurParDefaut = 4;
let maValeur = 1;
console.log(defautSiNul(maValeur, maValeurParDefaut));
maValeur = null;
console.log(defautSiNul(maValeur, maValeurParDefaut));
