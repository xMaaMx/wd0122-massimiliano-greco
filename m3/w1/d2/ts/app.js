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
//enumeratori
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
console.log(Months);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
var colore = Color.Bianco;
//funzioni e oggetti
var states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    if (!c) {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
var Car = /** @class */ (function () {
    function Car(mod, mar, col, p) {
        this.scontoRivenditore = 30; //protected e private non sono accessibili dall'esterno
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }
    Car.prototype.dettagliAuto = function () {
        return this.modello + " " + this.marca + " " + this.colore;
    };
    Object.defineProperty(Car.prototype, "cambiaScontoRivenditore", {
        set: function (n) {
            this.scontoRivenditore = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "prezzoFinale", {
        get: function () {
            return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
        },
        enumerable: false,
        configurable: true
    });
    Car.nazione = function () {
        console.log(this.stato);
    };
    Car.stato = 'Italia';
    return Car;
}());
var fiat = new Car('500', 'Fiat', 'grigio', 10000);
console.log(fiat.modello);
//console.log(fiat.scontRivenditore ) non posso accedere alle proprieta protected o private
console.log(fiat.prezzoFinale);
//fiat.cambiaScontoRivenditore = 20 non posso accedere alle proprieta protected o private
fiat.cambiaScontoRivenditore = 20; //il metodo setter modifica anche le proprietà con accesso privato o protetto
console.log(fiat.prezzoFinale);
console.log(fiat);
//fiat.nazione()//non posso usarlo cosi
Car.nazione();
var Veicoli = /** @class */ (function () {
    function Veicoli(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    Veicoli.prototype.dettagliVeicolo = function () {
        return "Modello: ".concat(this.modello, ", Marca: ").concat(this.marca, ", Ruote: ").concat(this.ruote);
    };
    return Veicoli;
}());
var apecar = new Veicoli(3, 'Piaggio', '', 1500, 'apecar');
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(marca, modello, prezzo) {
        var _this = _super.call(this, 4, marca, modello, prezzo, 'Automobile') || this;
        _this.autoradio = true;
        _this.costoPieno = 75;
        return _this;
    }
    return Cars;
}(Veicoli));
var auto = new Cars('Piaggio', '', 1500);
console.log(auto);
var ElectricCars = /** @class */ (function (_super) {
    __extends(ElectricCars, _super);
    function ElectricCars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectricCars.prototype.cambiaCostoPieno = function () {
        //this.costoPieno = 30 //la proprietà costo Pieno non è accessibile dalla sottoclasse
    };
    return ElectricCars;
}(Cars));
var autoElettrica = new ElectricCars('Fiat', '500 elettrica', 1500);
console.log(autoElettrica);
/*class Bici extends Veicoli{
    constructor(marca:string, modello:string, prezzo:number){
        super(2, marca, modello, prezzo, 'Bicicletta')

    }*/ 
//# sourceMappingURL=app.js.map