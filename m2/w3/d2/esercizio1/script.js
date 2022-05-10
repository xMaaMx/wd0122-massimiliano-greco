class persone {
    constructor (nome, eta){
        this.name = nome
        this.age = eta
    }
    calcolo(elemento){
        if (this.age > elemento.age){
            console.log(this.name + ' è più vecchio di ' + elemento.name);
        }
        else if (this.age > elemento.age){
            console.log(this.name + 'è più giovane di ' + elemento.name);
        }
        else{
            console.log(this.name + ' e ' + elemento.name + ' hanno la stessa età');
        }

    }
}

let p1 = new persone('Massimiliano', 35)
let p2 = new persone('Luca',36)
let p3 = new persone('Marco',35)
p1.calcolo(p3)

class adulti{
    constructor(nome, cognome, eta){
        this.name = nome
        this.cognome = cognome
        this.age = eta
    }
}
