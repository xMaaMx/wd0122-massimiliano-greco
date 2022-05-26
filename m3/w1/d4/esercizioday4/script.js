fetch("Abbigliamento.json")
    .then(function (res) { return res.json(); })
    .then(function (res) {
    console.log(res);
    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
        var abbigliamento = res_1[_i];
        var Abbigliamento = /** @class */ (function () {
            function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibilità, saldo) {
                this.id = id;
                this.codprod = codprod;
                this.collezione = collezione;
                this.capo = capo;
                this.modello = modello;
                this.quantita = quantita;
                this.colore = colore;
                this.prezzoivaesclusa = prezzoivaesclusa;
                this.prezzoivainclusa = prezzoivainclusa;
                this.disponibilità = disponibilità;
                this.saldo = saldo;
            }
            Abbigliamento.prototype.getsaldocapo = function () {
                var sconto = ((this.prezzoivainclusa * this.saldo) / 100);
                return sconto;
            };
            Abbigliamento.prototype.getacquistocapo = function () {
                var caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo) / 100);
                return caposcontato;
            };
            return Abbigliamento;
        }());
        var abbigliamento1 = new Abbigliamento(abbigliamento.id, abbigliamento.codprod, abbigliamento.collezione, abbigliamento.capo, abbigliamento.modello, abbigliamento.quantita, abbigliamento.colore, abbigliamento.prezzoivaesclusa, abbigliamento.prezzoivainclusa, abbigliamento.disponibilità, abbigliamento.saldo);
        console.log(abbigliamento1);
        console.log('sconto: ' + abbigliamento1.getsaldocapo() + '€');
        console.log('vestito con sconto applicato: ' + '(' + abbigliamento1.prezzoivainclusa + '€' + ' - ' + abbigliamento1.getsaldocapo() + '€' + ') ' + '= ' + abbigliamento1.getacquistocapo() + '€');
    }
});
var APPURL = 'Abbigliamento.json';
var Vestiti = /** @class */ (function () {
    function Vestiti(id, cod, coll, ca, mo, qu, col, pie, pii, di, sa) {
        fetch('./Abbigliamento.json')
            .then(function (data) { return data.json(); })
            .then(function (data) {
            console.log(data);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var user = data_1[_i];
                console.log(user);
            }
        });
    }
    Object.defineProperty(Vestiti.prototype, "saldocapo", {
        get: function () {
            return this.prezzoivainclusa - this.prezzoivaesclusa;
        },
        enumerable: false,
        configurable: true
    });
    return Vestiti;
}());
var spesa = new Vestiti(1, 3, 4, 'maglia', 'polo', 4, 'red', 10, 15, 'si', 50);
console.log(spesa);
/*class Abbigliamento {
    

    constructor(id:number,cod:number,coll:number,ca:string,mo:string,qu:number,col:string,pie:number,pii:number, di:string, sa:number){

        this.id = id
        this.codprod = cod
        this.collezione = coll
        this.capo = ca
        this.modello = mo
        this.quantita = qu
        this.colore = col
        this.prezzoivaesclusa = pie
        this.prezzoivainclusa = pii
        this.disponibile = di
        this.saldo = sa
    }

     
}*/
