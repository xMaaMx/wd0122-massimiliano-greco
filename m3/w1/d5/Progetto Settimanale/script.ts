interface Smartphone{
    carica:number
    numeroChiamate: number
    ricarica(unaRicarica:number):void
    chiamata(minutiDurata:number):void

}

class FirstUser implements Smartphone{
    public carica:number
    public numeroChiamate: number

    constructor(carica:number,numeroChiamate:number){
        this.carica = carica ;
        this.numeroChiamate = numeroChiamate ;
    }
public ricarica(unaRicarica:number):void{
    this.carica = this.carica + unaRicarica
    console.log('Hai ricaricato ' + this.carica + '€');
    
}
public chiamata(minutiDurata:number):void{
    this.numeroChiamate = minutiDurata

    let minutoCostoChiamate = minutiDurata * 0.2

    if((this.carica - minutoCostoChiamate) > 0){
        this.carica = this.carica - minutoCostoChiamate
    }else{
        console.log('credito esaurito');
        
    }
}

public getNumeroChiamate():number {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate')
        return this.numeroChiamate ;
    }
    public numero404():any {
        console.log('Il credito residuo è di : ' + this.carica + '€');
        
    }
    public azzeraChiamate():void{
        this.numeroChiamate
    }

}

let chiamata = new FirstUser(0,0)
chiamata.ricarica(55)
chiamata.chiamata(7)
chiamata.getNumeroChiamate()
chiamata.numero404()
chiamata.azzeraChiamate()

console.log(chiamata);

//


class SecondUser implements Smartphone{
    public carica:number
    public numeroChiamate: number

    constructor(carica:number,numeroChiamate:number){
        this.carica = carica ;
        this.numeroChiamate = numeroChiamate ;
    }
public ricarica(unaRicarica:number):void{
    this.carica = this.carica + unaRicarica
    console.log('Hai ricaricato ' + this.carica + '€');
    
}
public chiamata(minutiDurata:number):void{
    this.numeroChiamate = minutiDurata

    let minutoCostoChiamate = minutiDurata * 0.2

    if((this.carica - minutoCostoChiamate) > 0){
        this.carica = this.carica - minutoCostoChiamate
    }else{
        console.log('credito esaurito');
        
    }
}

public getNumeroChiamate():number {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate')
        return this.numeroChiamate ;
    }
    public numero404():any {
        console.log('Il credito residuo è di : ' + this.carica + '€');
        
    }
    public azzeraChiamate():void{
        this.numeroChiamate
    }

}

let chiamata2 = new SecondUser(0,0)
chiamata2.ricarica(100)
chiamata2.chiamata(5)
chiamata2.getNumeroChiamate()
chiamata2.numero404()
chiamata2.azzeraChiamate()

console.log(chiamata2);


class ThirdUser implements Smartphone{
    public carica:number
    public numeroChiamate: number

    constructor(carica:number,numeroChiamate:number){
        this.carica = carica ;
        this.numeroChiamate = numeroChiamate ;
    }
public ricarica(unaRicarica:number):void{
    this.carica = this.carica + unaRicarica
    console.log('Hai ricaricato ' + this.carica + '€');
    
}
public chiamata(minutiDurata:number):void{
    this.numeroChiamate = minutiDurata

    let minutoCostoChiamate = minutiDurata * 0.2

    if((this.carica - minutoCostoChiamate) > 0){
        this.carica = this.carica - minutoCostoChiamate
    }else{
        console.log('credito esaurito');
        
    }
}

public getNumeroChiamate():number {
        console.log('Hai effettuato ' + this.numeroChiamate + ' chiamate')
        return this.numeroChiamate ;
    }
    public numero404():any {
        console.log('Il credito residuo è di : ' + this.carica + '€');
        
    }
    public azzeraChiamate():void{
        this.numeroChiamate
    }

}

let chiamata3 = new ThirdUser(0,0)
chiamata3.ricarica(300)
chiamata3.chiamata(10)
chiamata3.getNumeroChiamate()
chiamata3.numero404()
chiamata3.azzeraChiamate()
console.log(chiamata2);