abstract class Figure {
    private nbCote: number;
    protected tailleCote: number;

    constructor(nbCote: number, tailleCote: number){
        this.nbCote = nbCote;
        this.tailleCote = tailleCote;
    }

    perimetre(){
        return this.nbCote * this.tailleCote;
    }

    abstract aire();

    rapport(){
        return `Aire: ${this.aire()}, Perimetre: ${this.perimetre()}`
    }
}

class Triangle extends Figure {

    constructor(tailleCote: number){
        super(3, tailleCote);
    }

    aire(){
        return Math.pow(this.tailleCote, 2) * Math.pow(3, 0.5) / 4;
    }

    rapport(){
        return "Triangle, " + super.rapport(); 
    }
}

class Losange extends Figure {

    private diag1: number;
    private diag2: number;
    
    constructor(diag1: number, diag2: number){
        super(4, Math.pow(Math.pow(diag1 / 2, 2) + Math.pow(diag2 / 2, 2), 0.5));
        this.diag1 = diag1;
        this.diag2 = diag2;
    }

    estUnCarre(){
        return this.diag1 == this.diag2;
    }

    aire(){
        return this.diag1 * this.diag2 / 2;
    }

    rapport(){
        return "Losange, " + super.rapport(); 
    }
}

let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5, 6); // diagonale1, diagonale2
let l2 = new Losange(4, 4);

let figures:Figure[] = [t1, t2, l1, l2];
for(let f of figures){
    console.log(f.rapport());
}