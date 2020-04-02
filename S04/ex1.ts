interface Mesurable {
    length: number;
}

class Trajet {
    private nom: string;

    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax {

    constructor(t: Array){
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array){
        for(let e of t){

        }
    }

    getMin(): {

    }

    getMax(){

    }
}

let trajets: Array = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = 
alert.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
alert.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = 
alert.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
alert.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

// Replace console.log by alert when run on TypeScript Playground