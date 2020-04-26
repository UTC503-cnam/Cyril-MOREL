//Ecrivez le code de l’exercice 1 en utilisant une fonction d’ordre supérieure maximize qui prend en paramètre la valeur max et qui renvoie une fonction

function maximize(max:number){
    return function(n:number){
        if (n > max)
            return max;
        else    
            return n;
    }
}
let tab = [1, 5, 2, 4, 3]

let maximize_3 = maximize(3);
let maximize_4 = maximize(4);

console.log(maximize_3(4))
console.log(maximize_3(2))
console.log(maximize_4(10))
console.log(maximize_4(2))