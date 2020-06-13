var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure(nbCote, tailleCote) {
        this.nbCote = nbCote;
        this.tailleCote = tailleCote;
    }
    Figure.prototype.perimetre = function () {
        return this.nbCote * this.tailleCote;
    };
    Figure.prototype.rapport = function () {
        return "Aire: " + this.aire() + ", Perimetre: " + this.perimetre();
    };
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(tailleCote) {
        return _super.call(this, 3, tailleCote) || this;
    }
    Triangle.prototype.aire = function () {
        return Math.pow(this.tailleCote, 2) * Math.pow(3, 0.5) / 4;
    };
    Triangle.prototype.rapport = function () {
        return "Triangle, " + _super.prototype.rapport.call(this);
    };
    return Triangle;
}(Figure));
var Losange = /** @class */ (function (_super) {
    __extends(Losange, _super);
    function Losange(diag1, diag2) {
        var _this = _super.call(this, 4, Math.pow(Math.pow(diag1 / 2, 2) + Math.pow(diag2 / 2, 2), 0.5)) || this;
        _this.diag1 = diag1;
        _this.diag2 = diag2;
        return _this;
    }
    Losange.prototype.estUnCarre = function () {
        return this.diag1 == this.diag2;
    };
    Losange.prototype.aire = function () {
        return this.diag1 * this.diag2 / 2;
    };
    Losange.prototype.rapport = function () {
        return "Losange, " + _super.prototype.rapport.call(this);
    };
    return Losange;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Losange(5, 6); // diagonale1, diagonale2
var l2 = new Losange(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    console.log(f.rapport());
}
