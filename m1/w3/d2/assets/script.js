/* stringhe ed escape */
var saluto = 'ciao'
var domanda = "com'è oggi il tempo?"
var domanda2 = 'com\'è oggi il tempo?'
var html = "<div class=\"blocco\"<div/>"

var nome = 'Giovanni'; //valore ipoteticamente definito dall'utente
var frase = "ciao" + nome + "come stai?";
var frase2 = `Ciao ${nome} come stai?` //backtick

console.log(frase2.length) //funziona solo su stringhe ed array. serve per contare i caratteri
console.log(frase2 [0])
console.log('%c'+frase2, 'colore:red')

var ultimoIndice = frase2.length - 1 //sono le due variabili per la stessa scrittura
console.log( frase2 [ ultimoIndice ]); //sono le due variabili per la stessa scrittura

var numero2 = 10
numero2 = 15
document.write (numero2)

console.log ('%c log colorato', 'color:red; font-size:30px')

console.log('ciao'.length)

/*let e const*/

const PASSWORD = 'kjalkdjjfalj'
console.log(PASSWORD)
// PASSWORD = 'klfdahkdhlajfl' => ERRORE

/*const OBJ = {
    nome = 'Mario'
}

OBJ.nome = 'marco'//posso modificare le proprietà di un oggetto anche se si trova in una costant
console.log(OBJ)*/


var x = 1
{
console.log (x)
}

let y = 2
{
console.log (y)
}

{
    var x2 = 1
    console.log (x2)
}
console.log(x2) //essendo che var ignora il block scope la variabile è raggiungibile
{
    let y2 = 2;//questa è una variabile locale ed appartiene al blocco
    console.log (y2)
}
//console.log(y2); errore: y2 non è definita

function scriviSaluto(){
    var s = 'Ciao'
    document.write(y)
    return s;
}
console.log (scriviSaluto())

scriviSaluto()

/* conversioni variabili */

var num = 4
var testo = '4'
var prezzo = '4€'

console.log (num * testo) //testo viene trasformato in numero e quindi moltiplicato
console.log (num + testo) //num viene trasformato in stringa
console.log(num * prezzo)

let bool = false
let valore = "<br>il valore della variabile booleana è " + bool + '<br/>'
document.write(valore)

console.log (num * bool) //se convertito in numero un valore booleano si trasforma in 0 se è false, in 1 se è tru

let booleano = Number(true)
let errore = Number('4a')
let stringa = String(4)
console.log(booleano, errore, stringa)

let arr = ['a', 'b', 'c', 'd', 60]
document.write (arr) // i valori vengono contatenati in una stringa e separati tra loro con una virgola

