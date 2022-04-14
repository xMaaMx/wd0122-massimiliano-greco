/** split e join */


frase = 'la mia pizza preferita è la Diavola'

let arrFrase = frase.split(' ')

console.log(arrFrase)
console.log(arrFrase[0])
// split //
let citta = 'Roma,Milano,Napoli,Firenze'

let arrayCitta = citta.split(',')
console.log(arrayCitta)

// join //
let nuovoArrayCitta = ['Roma','Milano','Napoli','Firenze']

let nuovaStringaCitta = nuovoArrayCitta.join('/')
console.log(nuovaStringaCitta)

