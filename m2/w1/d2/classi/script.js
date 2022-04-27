
class Pizza{

    constructor(g,tipo = 'Napoletana',p = 5){
        //all'interno del constructor inizializzo/valorizzo le proprietà ma posso anche lanciare funzioni/avviare processi
        this.gusto = g
        this.tipo = tipo
        this.prezzo = p,
        this.sconto = 0

        this.dettagli()
    }
    dettagli(){
        console.log('La pizza ' +this.gusto+' di tipo ' + this.tipo + ' costa ' +this.prezzo + ' euro ')
    }
       
}


let margherita = new Pizza('Margherita')


/**
 * sistema furbo per oggetti che hanno tanti argomenti
 */


class Prova{
    constructor(obj){
        //all'interno del constructor inizializzo/valorizzo le proprietà ma posso anche lanciare funzioni/avviare processi
        this.gusto = obj.gusto || 'Margherita'
        this.tipo = obj.tipo
        this.prezzo = obj.prezzo
        this.sconto = 0
    }
}

let info = {
    prezzo:3,
}
let prova = new Prova(info)
console.log(prova);


/**
 * ereditarietà
 */


class Persona{

    constructor(nome, cognome, anni){
        this.nome = nome
        this.cognome = cognome
        this.anni = anni
    }
    presentazione(){
        return `ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni} anni`;
    }
    mostraDataIscrizione(){
        console.log(this.dataIscrizione.toLocaleDateString('it'))
    }
    static mostraData(){
        console.log(new Date ());
    }
    
    
}
let persona = new Persona('Mario', 'Rossi', 30)
persona.presentazione()

class Studente extends Persona {
    constructor(nome, cognome, anni, materie){
        super(nome, cognome, anni)// attiva il costruttore della classe genitore.valorizzando di fatto le proprietà ed eventualmente lanciando le sess funzioni
    this.materie = materie
    }

    prensentazione(){
        return super.prensentazione() + ' e sto studiando le seguenti materie' + this.materie
    }

}
let studente = new Studente ('Maria', 'Rosa', 20, ['HTML', 'CSS', 'JS'])
console.log(studente.presentazione());// questo metodo è un override, ossia un arricchimento dell'omonimo metodo appartenente al genitore

studente.mostraDataIscrizione()// questo metodo è stato ereditato, di fatto non lo abbiamo riscritto nella classe studente


/**
 * PROGRAMMAZIONE ASINCRONA
 */

