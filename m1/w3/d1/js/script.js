/*
commento su più righe
 */

// commento su una riga - andare a capo la chiude

/*
Tipi di dato:

number
string
boolean
object => liste di dati e funzioni separate per nome
array => lista di valori o dati identificati per numero

*/

var numero = 5;  //dato di tipo numerico
var testo = '5';  //dato di tipo testuale ( stringa )
var boolean = true // o false
var oggetto = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 30
}; //si identificano con le parentesi graffe. Gli apici identificano il dato
console.log(oggetto);
var array = [
    1,
    2,
    3,
    4,
    'ciao'
];


var a = 2;
var b = 2;
var c = a + b; //valore 4

var saluto = 'ciao';
var domanda = 'come stai?';

document.write(saluto + ' ' + domanda)

document.write('<ul>'); /* write è un metodo*/
document.write('<li>' + oggetto.nome + '</li>'); /* write è un metodo*/
document.write('<li>' + oggetto.cognome + '</li>'); /* write è un metodo*/
document.write('<li>' + oggetto.eta + '</li>'); /* write è un metodo*/
document.write('</ul>'); /* write è un metodo*/


/* funzioni */

function somma (){
    document.write(2 + 6);
}

somma()

function ottieniSomma(){
    return 2 + 6;
}
var risultato = ottieniSomma();

console.log(risultato);

/* assegnamento valori */

var nome = 'Mario';
console.log(nome);

nome = 'Giovanni';
console.log(nome);

/* lavorare con oggetti del dom */

var div1 = document.getElementById('elem') //prendi l'elemento con id elem
console.log(div1);


console.log(div1.innerHTML) /* è una proprietà che contiene il contenuto dell'HTML */

div1.innerHTML = 'prova;' /* cosi si accede in scrittura */


div1.style.backgroundColor = 'red'

div1.classList.add('giallo');


var blocchi = document.getElementsByClassName('blocco')//[{},{}]
console.log(blocchi)

blocchi[0].style.backgroundColor = 'green'


