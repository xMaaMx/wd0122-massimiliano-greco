//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(cod, ral, tin, tir) {
        this.codredd = cod;
        this.redditoannuolordo = ral;
        this.TasseInps = tin;
        this.TasseIrpef = tir;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return ((this.redditoannuolordo * this.codredd) / 100);
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.TasseInps / 100;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.TasseIrpef / 100;
    };
    return Lavoratore;
}());
//
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.codredd;
    };
    return Artigiano;
}(Lavoratore));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.codredd;
    };
    return LiberoProfessionista;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.codredd;
    };
    return Commerciante;
}(Lavoratore));
var l1 = new Artigiano(10000, 5, 10, 20);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l2 = new LiberoProfessionista(20000, 8, 30, 40);
console.log('utile tasse ARTIGIANO:' + l2.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l2.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l3 = new Commerciante(25000, 10, 40, 50);
console.log('utile tasse ARTIGIANO:' + l3.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l3.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
