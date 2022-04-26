let now = new Date ()
console.log(now);// data attuale
console.log(now.getTime()); //timestamp
console.log(now.getDay()); // numero del giorno della settimana

let future = new Date()

let futureMinutes = future.getMinutes()
future.setMinutes( futureMinutes + 15 )

console.log(future);

if(now.getTime() < future.getTime()){
    //fai qualcosa
}

const options = {year: 'numeric', month: 'long', day: 'numeric'}

/* intervalli


setInterval(fn,)
*/

setInterval(function(){
    let n = new Date
    document.querySelector('#secondi').innerHTML = n.getMinutes() + ' : ' 
    + n.getSeconds()
},1000)

/*setInterval(function(){
    let n = new Date
    document.querySelector('#secondi').innerHTML = n.getSeconds()
},1000)*/



