interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}
interface observeurFibo{
    fini(n:number, valeur:number);
}

class Fibonacci implements Iterateur <number>{
    private n_actuel: number;
    private n_max: number;
    private n1: number;
    private n2: number;
    private observeur: observeurFibo;

    constructor (n_max: number){
console.log("étape constructor Fibonacci début");
        this.n_max= n_max;
        this.n_actuel=0;
        this.n1=0;
        this.n2=0;
        this.observeur= null;
//console.log("nmax="n_max);
//console.log("this.nmax="this.n_max);
//console.log("this.observeur="this.observeur);
//console.log("etape constructor Fibonacci fin");
    }

    aUnSuivant() : boolean{
console.log("étape aUnSuivant avant boucle");
        if (this.n_actuel < this.n_max){
console.log("étape aUnSuivant dans boucle");
console.log("this.n_actuel="this.n_actuel);
            return this;
        }
    }

    suivant(): number{        
        let valCourante;
console.log("étape Suivant avant boucle");
        if (this.n_actuel==0){
            valCourante=0;}
            else if (this.n_actuel==1){
                valCourante=1;
                this.n1=1;
                this.n2=0;}

                else{valCourante=this.n1+this.n2;
console.log("this.n_actuel=" this.n_actuel ", this.valCourante="valCourante,", this.n1="this.n1);

                this.n2=this.n1;
                this.n1=valCourante;}
                this.n_actuel++;
console.log("this.n_actuel="this.n_actuel ", this.valCourante="valCourante,", this.n1="this.n1);

                this.notifObserveur(this.n_actuel++,valCourante);
                }

    nouvelObserveur(new_observeur: observeurFibo){
console.log("étape constructeur observeurFibo");
        this.observeur = new_observeur;
console.log('observeur en cours');
//console.log(${'obseveurthis.observeur()}');

    }
    private notifObserveur(n:number, valeur:number){
        if (this.observeur){
console.log('lancement notifObserveur');
            this.observeur.fini(n,valeur);}
    }
}

// Ex2:	ajoutez	un Observateur qui sera informé lorsque le dernier élément de la suite est atteint

class Signal implements observeurFibo {
    constructor(f: number) {
console.log("étape Signal.constructeur");
        console.log(f);
    }
    fini(n:number, valeur:number){
console.log("étape Signal.Fini");
console.log(`Fini! Fibonacci de(${n}) est ${valeur}`);
    }
}            
// fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
console.log("étape 0");

let f = new Fibonacci(10); // (**)
console.log("étape 1");

f.nouvelObserveur(new Signal());
while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}
console.log("étape fin");
// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série // problème avec retour" Fini! Fibonacci de(9) est 0 "
// (**) Ex3 : remplacer ce code par une initialisation par Singleton