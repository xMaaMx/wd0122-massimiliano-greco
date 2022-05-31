function add(a) {
    return a;
}
var res = add('ciao');
console.log(res);
var res2 = add(654);
console.log(res2);
var customArray = /** @class */ (function () {
    function customArray() {
        this.arr = [];
    }
    customArray.prototype.getItems = function () {
        return this.arr;
    };
    customArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    customArray.prototype.removeItem = function (item) {
        var start = this.arr.indexOf(item);
        this.arr.splice(start, 1);
    };
    customArray.prototype.removeItem2 = function (item) {
        this.arr = this.arr.filter(function (i) { return i !== item; });
    };
    return customArray;
}());
var array = new customArray();
array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem2('ciao2');
console.log(array.getItems());
var k = {
    key: 'id',
    value: 0
};
var d = {
    key: 5,
    value: 0
};
console.log(k);
//TUPLE
var user = [1, 'Giovanna'];
var id = user[0], nome = user[1]; // non confondere con assegnamento in destrutturazione
console.log(id, nome);
//MATRICE DI TUPLE
var userArr = [
    [1, 'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
    user
];
userArr.push([4, 'Sara']);
console.log(userArr);
