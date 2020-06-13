//Convertissez les fonctions de cars.ts en fonction lambda, en utilisant au besoin filter et reduce
class Car {
    constructor(
        public brand: string,
        public model: string,
        public price: number){
        }
}
let maxPrice = cars => cars.reduce((max,val) => val.price > max ? val.price:max,0);
let minPrice = cars => cars.reduce((min,val) => val.price < min ? val.price:min,Number.MAX_VALUE);
let averagePrice = cars => cars.reduce((total, car) => car.price +total,0)/cars.length;
//let averagePriceByBrand = cars => brand => averagePrice(cars.filter(cars=>cars.brand === brand));
let averagePriceByBrand = cars => brand => averagePrice(cars.filter(car => car.brand === brand));

let cars: Car[] = [new Car('Renault', 'Twizy', 7540), 
                   new Car('Alfa Romeo', 'Mito', 15490),
                   new Car('Volkswagen', 'Golf', 21990),
                   new Car('Porsche', '718', 55040),
                   new Car('BMW', 'Serie 1', 23200),
                   new Car('Audi', 'A4', 33670),
                   new Car('Porsche', 'Macan', 58835),
                   new Car('Volkswagen', 'Polo', 14430),
];
//console.trace
console.log('Max price: ' + maxPrice(cars));
console.log('Min price: ' + minPrice(cars));
console.log('Average price: ' + averagePrice(cars));
console.log('nb car: ' + cars.length)
//console.log('nbBrandCars: ' + averagePriceByBrand('BMW'));
console.log('Average price for Porsche: ' + averagePriceByBrand(cars) ('Porsche'));