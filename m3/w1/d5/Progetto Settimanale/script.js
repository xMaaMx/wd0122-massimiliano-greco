var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica = this.carica + unaRicarica;
        console.log('Hai ricaricato ' + this.carica + '€');
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate = minutiDurata;
        var minutoCostoChiamate = minutiDurata * 0.2;
        if ((this.carica - minutoCostoChiamate) > 0) {
            this.carica = this.carica - minutoCostoChiamate;
        }
        else {
            console.log('credito esaurito');
        }
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    };
    FirstUser.prototype.numero404 = function () {
        console.log('Il credito residuo è di : ' + this.carica + '€');
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate;
    };
    return FirstUser;
}());
var chiamata = new FirstUser(0, 0);
chiamata.ricarica(55);
chiamata.chiamata(7);
chiamata.getNumeroChiamate();
chiamata.numero404();
chiamata.azzeraChiamate();
console.log(chiamata);
//
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica = this.carica + unaRicarica;
        console.log('Hai ricaricato ' + this.carica + '€');
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate = minutiDurata;
        var minutoCostoChiamate = minutiDurata * 0.2;
        if ((this.carica - minutoCostoChiamate) > 0) {
            this.carica = this.carica - minutoCostoChiamate;
        }
        else {
            console.log('credito esaurito');
        }
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    };
    SecondUser.prototype.numero404 = function () {
        console.log('Il credito residuo è di : ' + this.carica + '€');
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate;
    };
    return SecondUser;
}());
var chiamata2 = new SecondUser(0, 0);
chiamata2.ricarica(100);
chiamata2.chiamata(5);
chiamata2.getNumeroChiamate();
chiamata2.numero404();
chiamata2.azzeraChiamate();
console.log(chiamata2);
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica = this.carica + unaRicarica;
        console.log('Hai ricaricato ' + this.carica + '€');
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate = minutiDurata;
        var minutoCostoChiamate = minutiDurata * 0.2;
        if ((this.carica - minutoCostoChiamate) > 0) {
            this.carica = this.carica - minutoCostoChiamate;
        }
        else {
            console.log('credito esaurito');
        }
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    };
    ThirdUser.prototype.numero404 = function () {
        console.log('Il credito residuo è di : ' + this.carica + '€');
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate;
    };
    return ThirdUser;
}());
var chiamata3 = new ThirdUser(0, 0);
chiamata3.ricarica(300);
chiamata3.chiamata(10);
chiamata3.getNumeroChiamate();
chiamata3.numero404();
chiamata3.azzeraChiamate();
console.log(chiamata2);
