var Car = /** @class */ (function () {
    function Car(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    return Car;
}());
var maxPrice = function (cars) { return cars.reduce(function (maxPrice, car) { return car.price > maxPrice ? car.price : maxPrice; }, 0); };
var minPrice = function (cars) { return cars.reduce(function (minPrice, car) { return car.price < minPrice ? car.price : minPrice; }, Number.MAX_VALUE); };
var averagePrice = function (cars) { return cars.reduce(function (total, car) { return total + car.price; }, 0) / cars.length; };
var averagePriceByBrand = function (cars) { return function (brand) { return averagePrice(cars.filter(function (car) { return car.brand === brand; })); }; };
var cars = [new Car('Renault', 'Twizy', 7540),
    new Car('Alfa Romeo', 'Mito', 15490),
    new Car('Volkswagen', 'Golf', 21990),
    new Car('Porsche', '718', 55040),
    new Car('BMW', 'Serie 1', 23200),
    new Car('Audi', 'A4', 33670),
    new Car('Porsche', 'Macan', 58835),
    new Car('Volkswagen', 'Polo', 14430),
];
console.log('Max price: ' + maxPrice(cars));
console.log('Min price: ' + minPrice(cars));
console.log('Average price: ' + averagePrice(cars));
console.log('Average price for Porsche: ' + averagePriceByBrand(cars)('Porsche'));
