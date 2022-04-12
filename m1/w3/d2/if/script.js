/*let eta = 17
if(eta <= 18){
    document.write('sei maggiorenne')
}
else{
    document.write('sei minorenne')

}*/


let eta = prompt('Quanti anni hai') || 18
if(eta >= 18 && eta <= 120){
    document.write ('sei maggiorenne <br/>')
}else if(eta > 120){
    document.write('sei antico')
}
else {
    location.href = 'https:google.it'
}

console.log(eta >= 18 && eta <= 120)

let condizione = true
if (condizione == true){
    document.write ('è vera')
}

let anni = 10
if(anni = 11)/* con == confronti   --  con un  = anni viene riassegnato */
{
    console.log('vero', anni)
}

let nomi = 'Mario, Giovanni, '
nomi += 'Carlo'
console.log(nomi)

let conto = 5
conto += 5
console.log(conto)