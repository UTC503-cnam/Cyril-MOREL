let authors = [{name: 'franquin'}, {name: 'uderzo'}, {name: 'hergé'}];
let upperized_names = authors.map(n => n.name.toUpperCase());
console.log(upperized_names); // [ 'FRANQUIN', 'UDERZO', 'HERGÉ' ]
