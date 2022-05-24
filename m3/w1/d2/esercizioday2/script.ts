class sonAccount{
    public balanceInit:number
    public deposit:number
    public oneWithDraw:number 
    public twoWithDraw:number

    constructor(bal:number, ver:number, pPrelievo:number, sPrelievo:number){
        this.balanceInit = bal
        this.deposit = ver
        this.oneWithDraw = pPrelievo
        this.twoWithDraw = sPrelievo
    }
    public saldo():number{
        return this.balanceInit + this.deposit - this.oneWithDraw - this.twoWithDraw
    }
   
    }

var saldoFinale = new sonAccount(100,50,20,10)
console.log(saldoFinale.saldo());

/////////////////////////////////////////////////////////////
class motherAccount{
    public balanceInit:number
    public deposit:number
    public oneWithDraw:number 
    public twoWithDraw:number

    protected commissione:number = 10

    constructor(bal:number, ver:number, pPrelievo:number, sPrelievo:number){
        this.balanceInit = bal
        this.deposit = ver
        this.oneWithDraw = pPrelievo
        this.twoWithDraw = sPrelievo
    }
    public saldoF():number{
        return this.balanceInit + this.deposit - this.oneWithDraw - this.twoWithDraw - ((this.oneWithDraw + this.twoWithDraw) * this.commissione)/ 100
    }
  
}


var saldoFinal = new motherAccount(0,50,20,10)
console.log(saldoFinal.saldoF());


//let saldoParziale = new sonAccount(40, 30)
//console.log(saldoParziale.saldoCommissione());




//public saldoCommissione():number{
 //   return this.bilancio -= ((this.prelievo * this.commissione)/100)
//}