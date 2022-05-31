/*let scarto1:(boolean|number)= true
let scarto2:(boolean|number) = true
let n:any = true;
while(n){
    for(var i=0; i<100; i++){
        n = Math.floor(Math.random()*99 + 1);
    }
    alert("Vince chi indovina il numero casuale o chi ci va piu vicino");

    var giocatore1:any = prompt("Giocatore1, indovina un numero:");
    var giocatore2:any = prompt("Giocatore2, indvoina un numero:");
    
    if(giocatore1 == n){
        alert("Giocatore1 hai indovinato!!");
    }
    else{
        scarto1 = Math.abs(n - giocatore1);
    }
    if(giocatore2 == n){
        alert("Giocatore2 hai indovinato!!");
    }
    else{
        scarto2 = Math.abs(n - giocatore2);
    }
    if(scarto1 < scarto2){
        alert("Nessuno dei due ha indovinato il numero, ma il giocatore 1 si è avvicinato di più! il numero era " + n);
    }
    else{
        alert("Nessuno dei due ha indovinato il numero casuale, ma il giocatore 2 si è avvicinato di più! il numero era " + n);
    }
    n = confirm("Vuoi giocare di nuovo?");
}
*/

let c:number = 1

do{
    c += 3
    
} while( c<10)

console.log(c);