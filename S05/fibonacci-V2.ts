interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}

class Fibonacci implements Iterateur <number>{
    private n_actuel: number;
    private n_max: number;
    private n1: number;
    private n2: number;

    constructor (n_max: number){
        this.n_max= n_max;
        this.n_actuel=0;
        this.n1=0;
        this.n2=0;
    }

    aUnSuivant() : boolean{
        if (this.n_actuel < this.n_max){
        //  console.log(`${n_actuel()}`);
  //          console.log(n_actuel);
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
        }

    }

    // fibonacci(n) = fibonnacci(n-1) + fibonnacci(n-2)
}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
let f = new Fibonacci(10); // (**)
while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton