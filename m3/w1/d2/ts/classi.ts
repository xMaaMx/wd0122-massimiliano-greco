class Car {

public modello:string
public marca:string
public colore:string

protected prezzo:number
protected scontoRivenditore:number = 30;//protected e private non sono accessibili dall'esterno

static stato = 'Italia'
constructor(mod:string, mar:string, col:string, p:number){
    this.modello = mod;
    this.marca = mar
    this.colore = col
    this.prezzo = p
}
public dettagliAuto():string{
    return this.modello + " " + this.marca + " " + this.colore;

}
public set cambiaScontoRivenditore(n:number){
    this.scontoRivenditore = n
}
public get prezzoFinale():string{
    return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
}

public static nazione():void{
    console.log(this.stato);
}

}

let fiat = new Car('500', 'Fiat', 'grigio', 10000)

console.log(fiat.modello);
//console.log(fiat.scontRivenditore ) non posso accedere alle proprieta protected o private
console.log(fiat.prezzoFinale)
//fiat.cambiaScontoRivenditore = 20 non posso accedere alle proprieta protected o private


fiat.cambiaScontoRivenditore = 20 //il metodo setter modifica anche le proprietà con accesso privato o protetto

console.log(fiat.prezzoFinale);
console.log(fiat);

//fiat.nazione()//non posso usarlo cosi

Car.nazione()


