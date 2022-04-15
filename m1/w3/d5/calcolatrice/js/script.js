alert ('trova la calcolatrice funzionante :)')

function aggiungiNumero(bottone){

    let numero = bottone.innerHTML

    let display = document.querySelector('#display')

    display.value += numero
}
function moltiplicazione(){
    let display = document.querySelector ('#display')

    display.value  += "*"
}


function risultato(){

    let display = document.querySelector ('#display')


    let totale = eval(display.value)

    display.value = totale
}
function canc (){
    let display = document.querySelector ('#display')

    display.value = ''
}

function img(){
    let display = document.querySelector ('#display')

    display.value = "fatal error"
}


/* 
// document.getElementById ('audio').play()

let campo = document.querySelector('#test')

campo.addEventListener('keyup',function(evento){
    if(evento.key == 'w'){
        svolgi un compito specifico
    }
})

*/