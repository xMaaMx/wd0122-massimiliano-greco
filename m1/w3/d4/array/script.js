let arr = [1,2,3,4]
console.log(arr, arr.length)

let pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]

console.log(pizze[0])
console.log(pizze)

pizze[0] += 'Capricciosa'

let pizzaDiavola = pizze[1]
console.log(pizzaDiavola)

console.log( pizze )

let ul = document.querySelector ('ul')

console.log(ul.innerHTML) //richiama l'elemento
console.log(ul.innerText)//richiama il testo dell'elemento

let li = document.querySelector('ul li:nth-of-type(4)') // selezione un elemento specifico
console.log(li)

let liAll = document.querySelectorAll ('ul li') //array di oggetti

console.log (liAll[2])

/*---------------*/

pizze = [
    'Margherita',
    'Diavola',
     '4 stagioni',
     'Capricciosa'
]

let [pizza1,pizza2,pizza3,pizza4] = pizze
console.log (pizze)

ul.innerHTML = pizze[2]
document.write(pizze)


//ordinare
let nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana'
]

nomi.sort()

console.log(nomi)

//**metodi */

let frase = "La mia pizza preferita è la Diavola."

let indice = frase.indexOf('Diavola') //fa una ricerca 

console.log(indice)

if(indice != -1){
    console.log ('trovato')
}else{
    console.log('Non trovato')
}

//aggiungere o rimuovere dagli array

nomi.push('Ivona')
console.log(nomi)

nomi.pop()//rimuove elemento 
console.log(nomi)

let nomeEliminato = nomi.pop() //è possibile assegnare ad una variabile il risultato di po, in questo modo otteriamo una copia di cio che hai eliminato.

console.log(nomi)
console.log('Hai elimianto il nome' + nomeEliminato)

nomi.push('Ivona')
console.log(nomi)


nomi.splice(2,1) //per iniziare a cancellare da un punto 
//array.splice(indiceDiPartenza, NumeroElementiDaEliminare)
console.log(nomi)

nomi.splice(2,1,'Ledio')
console.log(nomi)


nomi = ['mario', 'zaira', 'luca', 'massimo', 'adriana']
let nomi2 = ['Francesco', 'simone', 'pasquale']
let nomi3 = ['ivona', 'leopoldo', 'chiara']

console.log(nomi)

let unito = nomi.concat(nomi2)
console.log(unito)


let x = [1,2,3,4,'ciao', [4,8,96,['a','b','c'], 'ciao']]

console.log (x [2])
console.log (x [5][3][0])

