let authors = [{ name: 'Franquin', country:'be' }, { name: 'Uderzo', country:'fr' }, { name: 'Hergé', country:'be' }];
// Ecrivez le code renvoyant un tableau contenant uniquement les noms des auteurs belges précédés de M.
// Instructions de boucle interdites.
let belges = n => n.country=='be';
let belgian_authors = authors.filter(belges)

console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']