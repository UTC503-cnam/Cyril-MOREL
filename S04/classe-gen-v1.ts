class CompteurAccess<T> {
    private compteur: number;
    private x: T;

    constructor(x: T){
        this.x = x;
        this.compteur = 0;
    }

    getX(): T {
        this.compteur ++;
        return this.x;
    }

    getCompteur(): number {
        return this.compteur;
    }
}
let chaine = "La phrase à lire";
let compteurAccesChaine = new CompteurAccess(chaine);

let nombre = 1234;
let compteurAccesNombre = new CompteurAccess(nombre);

console.log(compteurAccesChaine.getX());
console.log(compteurAccesChaine.getX());
console.log(compteurAccesNombre.getX());
console.log(compteurAccesNombre.getX());
console.log(compteurAccesNombre.getX());

console.log(`La chaine '${chaine}' a été lue ${compteurAccesChaine.getCompteur()} fois.`);
console.log(`Le nombre '${nombre}' a été lu ${compteurAccesNombre.getCompteur()} fois.`);
