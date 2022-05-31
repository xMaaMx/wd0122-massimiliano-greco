var sonAccount = /** @class */ (function () {
    function sonAccount(bal, ver, pPrelievo, sPrelievo) {
        this.balanceInit = bal;
        this.deposit = ver;
        this.oneWithDraw = pPrelievo;
        this.twoWithDraw = sPrelievo;
    }
    sonAccount.prototype.saldo = function () {
        return this.balanceInit + this.deposit - this.oneWithDraw - this.twoWithDraw;
    };
    return sonAccount;
}());
var saldoFinale = new sonAccount(100, 50, 20, 10);
console.log(saldoFinale.saldo());
/////////////////////////////////////////////////////////////
var motherAccount = /** @class */ (function () {
    function motherAccount(bal, ver, pPrelievo, sPrelievo) {
        this.commissione = 10;
        this.balanceInit = bal;
        this.deposit = ver;
        this.oneWithDraw = pPrelievo;
        this.twoWithDraw = sPrelievo;
    }
    motherAccount.prototype.saldoF = function () {
        return this.balanceInit + this.deposit - this.oneWithDraw - this.twoWithDraw - ((this.oneWithDraw + this.twoWithDraw) * this.commissione) / 100;
    };
    return motherAccount;
}());
var saldoFinal = new motherAccount(600, 50, 20, 10);
console.log(saldoFinal.saldoF());
//let saldoParziale = new sonAccount(40, 30)
//console.log(saldoParziale.saldoCommissione());
//public saldoCommissione():number{
//   return this.bilancio -= ((this.prelievo * this.commissione)/100)
//}
