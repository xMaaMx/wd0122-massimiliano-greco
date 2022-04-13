let num = 5
let str = 'test'
let bool = true
let arr = []
let obj = {}

console.log (
    typeof num,
    typeof str,
    typeof bool,
    typeof arr,
    typeof obj,
)

if(typeof num == 'number'){
    console.log('è un numero')
}


let num1 = 1
let num2 = '1'

console.log(num1 == num2)// vero anche se i tipi di dato sono diversi ma i valori sono uguali
console.log(num1 === num2)//falso perchè devono essere identici anche i tipi di dato
console.log(num1 != num2)//falso perchè il valore è diverso. / NON UGUALE
console.log(num1 !== num2)//falso perchè devono essere diversi i tipi di dato ed i valori. / NON IDENTICO



//let conferma = prompt('scrivi la tua età')
let eta = prompt ('scrivi la tua età') || 0

let conferma = eta >= 18 ? 'sei maggiorenne' : 'sei minorenne'

//let conferma = prompt('scrivi la tua età') >= 18 ? 'sei maggiorenne' : 'sei minorenne'
//document.write (conferma)