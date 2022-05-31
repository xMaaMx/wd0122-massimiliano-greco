/*let arr:number[] = [10,20,30]

let moltiplicazione:number [] = arr.map(function(n:number){return n * 2})
            // = arr.map((n:number) => n * 2)


console.log(arr,moltiplicazione);


let strArr:string[] = ['ciao', 'ciao2', 'ciao3']


let strArrBold:string[] = strArr.map((s:string)=> `<b>${s.toUpperCase()}</b>`)

console.log(strArrBold);

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(f) {
    console.log('..loading');
    console.log(f);
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Max';
        console.log('Creazione persona');
    }
    Person = __decorate([
        Logger
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
function AddMethod(target) {
    console.log(target);
    target.prototype.saluta = function () {
        console.log('ciao');
    };
    target.prototype.nome = 'Max';
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.saluta = function () {
    };
    Test.prototype.nome = function () {
    };
    Test = __decorate([
        AddMethod
    ], Test);
    return Test;
}());
var x = new Test();
console.log(x);
x.saluta();
