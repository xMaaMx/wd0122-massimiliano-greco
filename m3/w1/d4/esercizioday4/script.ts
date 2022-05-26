const APPURL:string ='Abbigliamento.json'



class Vestiti{
    
    public id:number
    public codprod:number
    public collezione:number
    public capo:string
    public modello:string
    public quantita:number
    public colore:string
    public prezzoivaesclusa:number
    public prezzoivainclusa:number
    public disponibile:string
    public saldo:number
    
    constructor(id:number,cod:number,coll:number,ca:string,mo:string,qu:number,col:string,pie:number,pii:number, di:string, sa:number){
        fetch('./Abbigliamento.json')
        .then(data => data.json())
        .then(data => {
        
            console.log(data)
            for(let user of data){
        
                console.log(user);
                
            }
        })
    }

    public get saldocapo():number{
        return this.prezzoivainclusa - this.prezzoivaesclusa

    }

}
let spesa:any = new Vestiti(1,3,4,'maglia','polo',4,'red',10, 15, 'si', 50)
console.log(spesa);


/*fetch("Abbigliamento.json")
.then(res => res.json())
.then(res => {
    
console.log(res)
for(let abbigliamento of res){
class Abbigliamento{
    public id:number ;
    public codprod:number;
    public collezione:string;
    public capo:string;
    public modello:number;
    public quantita:number;
    public colore:string;
    public prezzoivaesclusa:number;
    public prezzoivainclusa:number;
    public disponibilità:string;
    public saldo:number;
    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibilità:string,saldo:number){
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
    getsaldocapo():number{
        let sconto = ((this.prezzoivainclusa * this.saldo)/100)
        return sconto
    }
    getacquistocapo(){
        let caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo)/100)
        return caposcontato
    }
}
let abbigliamento1:any = new Abbigliamento(abbigliamento.id,abbigliamento.codprod,abbigliamento.collezione,abbigliamento.capo,abbigliamento.modello,abbigliamento.quantita,abbigliamento.colore,abbigliamento.prezzoivaesclusa,abbigliamento.prezzoivainclusa,abbigliamento.disponibilità,abbigliamento.saldo)

console.log(abbigliamento1)
console.log('sconto: ' + abbigliamento1.getsaldocapo()+'€')
console.log('vestito con sconto applicato: ' +'('+ abbigliamento1.prezzoivainclusa +'€'+ ' - ' + abbigliamento1.getsaldocapo() +'€'+') ' +'= '+ abbigliamento1.getacquistocapo()+'€')
}

})*/









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

