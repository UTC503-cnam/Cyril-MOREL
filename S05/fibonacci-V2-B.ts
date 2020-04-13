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
        this.n_max= n_max;
        this.n_actuel=0;
        this.n1=0;
        this.n2=0;
        this.observeur= null;
    }

    aUnSuivant() : boolean{
        if (this.n_actuel < this.n_max){
            return this;
        }
    }

    suivant(): number{        
        let valCourante;
        if (this.n_actuel==0){
            valCourante=0;}
            else if (this.n_actuel==1){
                valCourante=1;
                this.n1=1;
                this.n2=0;}

                else{valCourante=this.n1+this.n2;
                this.n2=this.n1;
                this.n1=valCourante;}
                
                this.n_actuel++;
                return valCourante;}

    nouvelObserveur(new_observeur: observeurFibo){
        this.observeur = new_observeur;
    }

    private notifObserveur(n:number, valeur:number){
        if (this.observeur){
            this.observeur.fini(n,value);
        }
    }
}

// Ex2:	ajoutez	un Observateur qui sera informé lorsque le dernier élément de la suite est atteint

class Signal implements observeurFibo {

    constructor(f: number) {
        console.log(f);
    }
    fini(n:number, valeur:number){
        console.log(`Fini! Fibonacci de(${n}) est ${value}`);
    }
}            
    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = new Fibonacci(10); // (**)
f.nouvelObserveur(new Signal());
while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}


// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton