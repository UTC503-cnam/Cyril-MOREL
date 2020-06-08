abstract class ZooAnimal {
    // Attributs
    private nom: string;
    private age: number;
    private poids: number;
    private quantiteNourritureTotale: number;
    private bienNourri: boolean;
    // Constructeur
    constructor(nom: string, age: number, poids: number) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Accesseurs
    getNom() {
        return this.nom;
        }

    setNom(nouveauNom: string) {
        if (nouveauNom == null || nouveauNom.trim().length == 0) {
        console.log("Erreur: le nouveau nom n'est pas correct");
        return;
        }
        this.nom = nouveauNom;
    }

    // Méthodes
    nouvelleJournee() {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    recoitNourriture(quantite: number) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        } else {
            this.bienNourri = false;
        }
    }
    abstract calculBienNourri()
    
    recoitNourriture(quantite: number) {
            this.quantiteNourritureTotale += quantite;
            this.bienNourri = this.calculBienNourri();
            }

    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " + this.quantiteNourritureTotale + "Kg de nourriture."
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    }
        // Héritage  des Dauphins et des Pandas
        class ZooDauphin extends ZooAnimal{
            private poissonPrefere: string;
            constructor(name: string, age: number, poids: number, poissonPrefere: string){
                super(name,age,poids);                                    
                this.poissonPrefere = poissonPrefere;}
            etatAlimentation() {
                return super.etatAlimentation() + " Son poisson préféré est " + this.poissonPrefere + ".";}
            calculBienNourri(){
                return this.quantiteNourritureTotale > this.poids / 8;}
        }

        class ZooPanda extends ZooAnimal{
            private plantePreferee: string;
            constructor(name: string, age: number, poids: number, plantePreferee: string){
                super(name,age,poids);
                this.plantePreferee = plantePreferee;}
            etatAlimentation() {
            return super.etatAlimentation() + " Sa plante préférée est " + this.plantePreferee + ".";}
            calculBienNourri(){
                return this.quantiteNourritureTotale > (this.poids / 4 - this.age/10);}
        }

}
// Création d’instances de classes: objets
let flipper = new ZooDauphin("Flipper", 30, 150,"hareng");
let oum = new ZooDauphin("Oum", 20,100, "sardine");
let pandi = new ZooPanda("Pandi",10,80,"bambou");
flipper.nom="Flipper Junior";
// Appels de méthodes sur les objets
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
//flipper.bienNourri=false;
console.log(flipper.etatAlimentation());
console.log(pandi.etatAlimentation());
console.log(oum.etatAlimentation());