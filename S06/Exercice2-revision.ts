//let mapDouble= a => a.map(a => a*2);
const mapDouble= a => a*2;
const mapTriple= a => a*3;
const mapSquare= a => a*a;
const mapMaximize3= a=> a<3? a:3;

const e = [1,5,2,4,3];
console.log("Tableau base: "+ e);                   //Tableau base: 1,5,2,4,3
console.log("Tableau double: "+ e.map(mapDouble));  // Tableau double: 2,10,4,8,6
console.log("Tableau triple: "+ e.map(mapTriple));  // Tableau triple: 3,15,6,12,9
console.log("Tableau carré: "+ e.map(mapSquare));   // Tableau carré: 1,25,4,16,9
console.log("Tableau max3: "+ e.map(mapMaximize3)); // Tableau max3: 1,3,2,3,3
console.log("Tableau base: "+ e);                   //Tableau base: 1,5,2,4,3