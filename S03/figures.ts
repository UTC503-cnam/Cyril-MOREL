abstract class Figure{
    //Attributs
    private nbCotes: number;
    protected tailleCote: number;
    // Constructeur
    constructor (nbCotes: number, tailleCote: number){
        this.nbCotes= nbCotes;
        this.tailleCote= tailleCote;
    }
    //Méthodes
    perimetre(){
        return this.nbCotes*this.tailleCote;
    }
    abstract aire(){}
    rapport(){
        return "périmètre = " + this.perimetre + " Aire = " + this.aire;
    }
    // Héritage des Triangles et Losanges
    class Triangle extends Figure {
        constructor(tailleCote: number) {
            super(3,tailleCote);
            }
        aire(){
            return this.tailleCote * Math.pow(3,0.5)/2;
        }
        rapport(){
            return "figure: Triangle, taille des côtés= " + this.tailleCote + super.rapport()
        }
    }
}
    class Losange extends Figure {
        private diag1: number;
        private diag2: number;
        constructor(diag1: number, diag2: number) {
            super(4,diag1, diag2);
            }
        aire(){
            return this.diag1*this.diag2/2;
        }
        estUnCarre(){
            return this.diag1==this.diag2
        }
        rapport(){
            if(this.estUnCarre){
                return "figure: Carré , diagonales: " + this.diag1 +  super.rapport();
            }
            return "figure: Losange, diagonale 1: " + this.diag1 + ", diagonale 2: "+ this.diag2 + super.rapport();
            )           
        }
    }
}
let t1 = Triangle(5);
let t2 = Triangle(10);
let l1 = Losange(5,6); // diagonale 1, diagonale 2,
let l2 = Losange(4,4); // diagonale 1, diagonale 2,
let figures: Figure[]= [t1,t2,l1,l2];
for (let f of figures){
    console.log(f.rapport());
}