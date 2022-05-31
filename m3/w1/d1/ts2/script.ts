/*let boolean:boolean = true
if(boolean){
    console.log('ok');
}


let eta:number = 0

if(eta < 18){
    console.log('Sei maggiorenne');
    
}else if(eta >=18 && eta <= 120){
    console.log('Sei maggiorenne');
    
}else{
    console.log('Sei antico');
    
}

//un confronto genera sempre un dato booleano
console.log(eta >= 18 && eta <= 120);//entrambe vere quindi true
console.log(eta >= 18 && eta <= 20);//una falsa quindi false
console.log(eta >= 18 || eta <= 20);//una vera quindi true

let b:boolean = true
console.log(!b);//l'operatore ! serve ad invertire il risultato

console.log(!(eta >= 18 || eta <= 20));//l'operatore not ribalta il risultato grazie alle parentesi

*/

//TS3


let mese:number = 1

if(mese == 1){
    console.log('Gennaio');
    
}else if(mese == 2){
    console.log('febbraio');
    
}else if(mese == 3){
    console.log('Marzo');
}else{
    console.log('non esiste il mese numero' + mese);
    
}


switch(mese){
    case 1: 
    console.log('Gennaio');
        break
    case 2:
        console.log('Febbraio');
        break
    case 3:
        console.log('Marzo');
        break
    default:
        console.log('non esiste il mese numero' + mese);
        
}








