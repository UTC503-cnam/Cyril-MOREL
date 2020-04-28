let factorial = n => {
    // Avec boucle for, result et x comme état
    let result = 1;
    for(let x=1; x <= n; x+= 1){
        result = x * result;
    }
    return result;
}

let recursiveFactorial = n => {
    // Version récursive: aucun état
    if (n < 2){
        return n;
    }
    // Else
    return n * recursiveFactorial(n - 1);
}

console.log(factorial(10));
console.log(recursiveFactorial(10));
