class Test{
    public readonly name:string;
    public email:string = "tst@example.com"
    //public readonly id:number; siccome ho usato readonly tra gli argomenti del costruttore devo eliminare questa riga o me la segnerà come duplicato

    constructor(name:string, readonly id:number){
        this.name = name;
        this.id = id;

    }
    public checkEmail(email:string):void{
        if(this.email == email){
            throw new Error("Email già esistente")
        }
        this.email = email
    }
}

let x = new Test('Giovanna',1)
x.checkEmail('tst@example.com')

console.log(x.id, x.name);





