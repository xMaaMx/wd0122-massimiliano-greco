

let richiesta = new XMLHttpRequest()

//inizializzo l'oggetto che ti servirà per fare le operazioni
richiesta.open('GET', 'https://google.it') //GET chiamate in lettura POST chiamate in creazione. PUT/FETCH per aggiornare. DELETE eliminazione

richiesta.onload = function(){
    console.log(richiesta.response);
}

//jsonplaceholder.typicode.com ( sito che ci servirà per get e post)

//richiesta.send()// avvio la richiesta



fetch('https://jsonplaceholder.typicode.com/users')

.then(data => data.json())
.then(data => {

    console.log(data)
    for(let user of data){

        console.log(user);
        let div = document.createElement('div')
        div.innerHTML = user.email

        document.querySelector('#target').append(div)
    }
})


//JSON


let j = '{"name":"mario", "eta":30}'//la virgola alla fine della stringa non ci va// su google jsonvalidator

console.log(JSON.parse(j).name)
console.log(JSON.parse(j).eta)

//per convertire un oggetto in stringa dovrei usare JSON.stringify(oggetto)

fetch('prova.json')
.then(data => data.json())
.then(eta => console.log(eta))




