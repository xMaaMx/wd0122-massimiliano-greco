let nome = 'Massimiliano Greco'
const annoDiNascita = 1987
var eta = 35

/* la costante è un valore che non cambia in quanto unico */

function dati (){
return (nome + ' ' + annoDiNascita + ' ' + eta )
}

dati ()
console.log (dati ())
document.write (dati() + "<br/>" )
/*----------------*/


var passione = 'ciclismo'
let studi = 'lettere e filosofia' /* con il br dentro gli apici lo vediano in log solamente */

{
    var passione = 'calcio' /* var non ha block scope, la variabile viene sovrascritta */
}
{
    let studi = 'economia' /*let ha il blocco di codice quindi non viene sovrascritta , ma si puo leggere nel log */
    console.log (studi)
}

{
    var ciao = 3
}
console.log (ciao)
{

    let hello = 4
}
//console.log (hello) /* errore */

let vita = "la mia passione è il " + passione + " ed ho studiato " + studi
document.write (vita)
console.log (vita)
console.log (vita.length) /*con .lenght possiamo avere il conteggio dei caratteri in log*/



/* funzioni matematiche */
function finestudio(){
    let a = 2022
    let b = 10
    let somma = a - b
    return (somma)   
}
var fs = finestudio ()
/* boleano */

console.log (fs)
document.write ("ho finito gli studi nell'anno " + fs)







