type Combinable = number | string;
type ConversionDescriptor = boolean | string;

function combine(input1:Combinable,input2:Combinable):Combinable{



    if(typeof input1 === 'number' && typeof input2 === 'number'){

        var result:Combinable = Number (input1) + Number(input2); //o si fa cosi

    }else{
        var result:Combinable = input1.toString() + String(input2) // o si fa cosi
    }

    return result

}

let resNum = combine(1,1)
console.log(resNum);

let resStr = combine('1',1)
console.log(resStr);

console.log(combine('155',1));


//interfacce

interface ITest{
    nome:string
    cognome:string
}
let persona:ITest = {
    nome:'Mario',
    cognome:'Rossi',
}



//tipi di intersezioni


type Admin = {
    name:string,
    privileges:string[]
}
type Employee = {
    names:number;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee// in questa maniera li sto intersecando

const e1:ElevatedEmployee = {
    name:'Max',
    names:12,
    privileges: ['create-server'],
    startDate: new Date()
}


