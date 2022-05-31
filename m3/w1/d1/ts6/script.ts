class User{
    name!: string;
    lastname!: string;
    age!:number;
   /* constructor(name:string){
        this.name = name
    }*/
    address!:Address
}

class Address{
    via!:string;
    civico!:number;
    citta!: string;
}

let user:User = {
    name:'mario',
    lastname:'Rossi',
    age:32,
    address:{
        via:'Milano',
        civico:2,
        citta:'Roma'
    }
    
    
};
let user2:User = {
    name:'mario',
    lastname:'Rossi',
    age:32,
    address:{
        via:'Roma',
        civico: 1,
        citta: 'Milano'
}
}

let users:User[] = [user, user2]