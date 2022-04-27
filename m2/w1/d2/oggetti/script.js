
//usare un array per descrivere è sbagliato
let cellulare = [
    'samsung',
    'galaxy s7 edge',
    150,
]

//descrivo in maniera precisa uno smartphone. Questo è un metodo
let smartphone = {
    marca: 'samsung',
    modello: 'galaxy s7 edge',
    prezzo: 150,
    accendi : function(){
        //fa qualcosa
    }
}

/**
 * lettura e scrittura degli oggetti
 */

let j = {} //è un oggetto vuoto

let pizza = {
    gusto: 'Margherita',
    tipo: 'Napoletana',
    prezzo: 5,
    dettagli: function(){
        console.log('La pizza Margherita costa 5 euro');
    }
}
console.log(pizza.gusto);

pizza.gusto = 'Diavola'// il punto . serve a richiamare un oggetto

console.log(pizza.gusto);

console.log(pizza);

document.write(pizza) // questo vi darà errore, perchè non è possibile la conversione di oggetto in stringa

pizza.dettagli()//è un metodo ( ha il puntino e qualcosa prima)

function dettagli(){
    console.log('è una funzione differente');
}
dettagli()// è una funzione

/**
 * costruttore dell'oggetto. il nome va per convenzione con la prima lettera Maiuscola
 */

function Pizza(g,t,p){
    this.gusto = g
    this.tipo = t
    this.prezzo = p,
    this.sconto = 0
    this.dettagli = function(){
        console.log('La pizza ' +this.gusto+' di tipo ' + this.tipo + ' costa ' +this.prezzo + ' euro ')
    }

this.prova = function(){
    this.dettagli()//posso lanciare un metodo all'interno dell'oggetto a cui appartiene
    }
}

let margherita = new Pizza('Margherita', 'Napoletana', 5)
let margherita2 = new Pizza('Margherita', 'Pinsa',7)
let diavola = new Pizza ('Diavola', 'Napoletana', 1)

console.log(margherita2);
//margherita2.tipo = 'Romana'


margherita.dettagli()
margherita2.dettagli()
diavola.dettagli()
diavola.sconto = 5
diavola.dettagli()

Pizza.prototype.disponibilita = true
Pizza.prototype.prova = function(){
    this.dettagli()
}





