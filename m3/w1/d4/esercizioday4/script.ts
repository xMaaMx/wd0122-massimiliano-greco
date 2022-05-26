const APPURL:string ='Abbigliamento.json'

fetch("Abbigliamento.json")
.then(res => res.json())
.then(res => {

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
    getsaldocapo():number{
                let sconto = ((this.prezzoivainclusa * this.saldo)/100)
                return sconto
            }
            getacquistocapo(){
                let caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo)/100)
                return caposcontato
            }

}
let spesa:any = new Vestiti(1,3,4,'maglia','polo',4,'red',10, 15, 'si', 50)
console.log(spesa);
}
)
