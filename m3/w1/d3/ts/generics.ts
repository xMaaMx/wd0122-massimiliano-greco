function add<G>(a:G):G{
    return a
}

let res = add<string>('ciao')
console.log(res);

let res2 =add<number>(654)
console.log(res2);

class customArray<T>{

    private arr:T[] = []

    getItems():T[]{
        return this.arr
    }
    
    addItem(item:T){
        this.arr.push(item)
    }
    removeItem(item:T){
        let start = this.arr.indexOf(item)
        this.arr.splice(start,1)
    }
    removeItem2(item:T){
        this.arr = this.arr.filter((i:T)=> i !== item)
    }
}

let array = new customArray<string>()
array.addItem('ciao')
array.addItem('ciao2')
array.addItem('ciao3')
array.removeItem2('ciao2')

console.log(array.getItems());


//generics multipli

interface KeyValue<T, U>{
    key:T
    value:U

}

let k:KeyValue<string,number> = {
    key : 'id' ,
    value : 0
}

let d:KeyValue<number,number> = {
    key : 5,
    value : 0
}

console.log(k);

//TUPLE

let user:[number,string] = [1,'Giovanna']

let [id,nome] = user // non confondere con assegnamento in destrutturazione

console.log(id,nome);

//MATRICE DI TUPLE

let userArr:[number,string][] = [
    [1,'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
    user
]
userArr.push([4,'Sara'])
console.log(userArr);


