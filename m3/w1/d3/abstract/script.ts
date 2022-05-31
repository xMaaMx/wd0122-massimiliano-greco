abstract class Veicoli{
    public ruote:number;
    
    public marca:string;
    public modello:string;
    
    protected prezzo:number;
    
    public tipo:string

    
    constructor(ruote:number, marca:string, modello:string, prezzo:number, tipo:string){
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo
        
    }
    
    dettagliVeicolo():string{
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`
    }
    
    public abstract speed:number;
    protected abstract aumentaVelocita(vel?:number):void
    protected abstract riduciVelocita(vel?:number):void
        

}

class Automobili extends Veicoli{
    public speed:number = 0;
    
    public aumentaVelocita(vel?:number):void{
        if(!vel){
            this.speed++
        }else{
            this.speed += vel
        }
    }
    public riduciVelocita(vel?: number): void {
        if(vel == undefined){
            this.speed--
        }else{
            this.speed -= vel
        }
        
    }
    }

let veicolo = new Automobili (3, 'Piaggio','',1500, 'Apecar')
veicolo.aumentaVelocita()
veicolo.aumentaVelocita(5)
veicolo.riduciVelocita()

console.table(veicolo);
console.table(veicolo.dettagliVeicolo());


