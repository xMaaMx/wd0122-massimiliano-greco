//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    public codredd:number
    public redditoannuolordo:number
    public TasseInps:number
    public TasseIrpef:number

    constructor(cod:number, ral:number, tin:number, tir:number){
        this.codredd = cod;
        this.redditoannuolordo = ral
        this.TasseInps = tin 
        this.TasseIrpef = tir 
    }
    public getUtileTasse():number{
        return ((this.redditoannuolordo * this.codredd)/100)
    }
    public getTasseInps():number{
        return this.redditoannuolordo * this.TasseInps /100
    }
    public getTasseIrpef():number{
        return this.redditoannuolordo * this.TasseIrpef /100
    }

    abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {
   
    public getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - this.codredd
    }
}
class LiberoProfessionista extends Lavoratore {

    public getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - this.codredd
    }
    
}
class Commerciante extends Lavoratore {

    public getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - this.codredd
    }
    
}




let l1 = new Artigiano(10000, 5,10, 20);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8,30,40);
console.log('utile tasse ARTIGIANO:' + l2.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l2.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(25000, 10,40,50);
console.log('utile tasse ARTIGIANO:' + l3.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l3.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');