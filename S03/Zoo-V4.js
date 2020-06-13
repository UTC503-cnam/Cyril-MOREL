var ZooAnimal = /** @class */ (function () {
    // Constructeur
    function ZooAnimal(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Accesseurs
    ZooAnimal.prototype.getNom = function () {
        return this.nom;
    };
    ZooAnimal.prototype.setNom = function (nouveauNom) {
        if (nouveauNom == null || nouveauNom.trim().length == 0) {
            console.log("Erreur: le nouveau nom n'est pas correct");
            return;
        }
        this.nom = nouveauNom;
    };
    // Méthodes
    ZooAnimal.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        if (this.quantiteNourritureTotale > (this.poids / 5)) {
            this.bienNourri = true;
        }
        else {
            this.bienNourri = false;
        }
    };
    ZooAnimal.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " +
            this.quantiteNourritureTotale + "Kg de nourriture.";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal;
}());
// Création d’instances de classes: objets
var flipper = new ZooAnimal("Flipper", 30, 150);
flipper.nom = "Flipper Junior";
var pandi = new ZooAnimal("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
flipper.bienNourri = false;
console.log(flipper.etatAlimentation());
console.log(pandi.etatAlimentation());
