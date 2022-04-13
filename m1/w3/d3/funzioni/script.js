


let bottone = document.getElementById('bottone')
//bottone.onclick = miaFunzione; //altra possibilità per usare on click

function miaFunzione(){
    console.log('funzione invocata');
    return
}


/*
*funzioni parametriche
*/

function getSommaPro(a, b){
    document.write (a + b)
    return a + b
}
function moltiplica(a,b,c){
    document.write (a * b + c)
    return a * b + c
}
/*function moltiplica2 (a,b){
    document.write (a * b)
}*/
let res1 = getSommaPro(5,5)
let res2 = getSommaPro(30,20)
console.log(res1,res2)

let res3 = moltiplica2(res1,res2)
console.log(res3)

function moltiplica2 (a,b,c = 5){
    document.write (a * b * c)
    return a * b * c
    
}
moltiplica2(2,3)


function moltiplica3 (a,b,c,){
    let terzoValore = c || 1
    document.write (a * b * c)
    return a * b * terzoValore
}
moltiplica3(3,4,3)

function moltiplica4 (a,b,c){
    if(c !=undefined){
        return a * b * c
    }
    else {
        return a * b
    }
}
function moltiplica5 (a,b,c){
    if(c !=undefined){
        var res = a * b * c
    }
    else {
        var res = a * b
    }
    return res
}



(function (){
    console.log ('questo alert adesso si vedrà')
    document.write ('questo alert si vedrà')
})()

function saluto3(){

    let s = 'Ciao, '
    function nome(){
        let frase = s + 'Mario'
        return frase
    }
    return nome()
}
console.log(saluto3());


/**
 * funzioni freccia
 */

function dividi(){
    return 20 / 2
}

let divisione = () =>  20 / 2 // il return è implicito

console.log( divisione() )

let incrementa = a  => a+1

console.log( incrementa(4))

let divisionePro = (a,b) => a / b

console.log( divisionePro(4,2))

/* funzioni freccia*/

