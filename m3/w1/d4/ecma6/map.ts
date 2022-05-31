/*let arr:number[] = [10,20,30]

let moltiplicazione:number [] = arr.map(function(n:number){return n * 2})
            // = arr.map((n:number) => n * 2)


console.log(arr,moltiplicazione);


let strArr:string[] = ['ciao', 'ciao2', 'ciao3']


let strArrBold:string[] = strArr.map((s:string)=> `<b>${s.toUpperCase()}</b>`)

console.log(strArrBold);

*/

function Logger(f:Function){
    console.log('..loading');
    console.log(f);
    
}

@Logger
class Person{
    name:string = 'Max'

    constructor(){
        console.log('Creazione persona');
        
    }
}

const pers = new Person()

console.log(pers);


function AddMethod(target:Function){
    console.log(target);
    
    target.prototype.saluta = function(){
        console.log('ciao');
        
    }

    target.prototype.nome = 'Max'
}

@AddMethod

class Test{
    saluta(){

    }
    nome(){

    }

}

let x = new Test()
console.log(x);

x.saluta()

