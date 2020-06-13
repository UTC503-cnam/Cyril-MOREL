function truncate(len: number, value: string){
    return value.substring(0, len);
}
let chaines = ['Chaine1 très longgue', 'Chaine2 trop longue'];
let res = chaines.map(x => n=> truncate(n,x));
let n=5;
console.log(res);

//Comment appliquer truncate à chaines.map(f) qui a�end que f ait un seul paramètre alors que truncate en a deux ?