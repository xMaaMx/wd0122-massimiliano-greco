var code = 123;
var employeeCode = code;
console.log(typeof employeeCode);
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        var result = Number(input1) + Number(input2); //o si fa cosi
    }
    else {
        var result = input1.toString() + String(input2); // o si fa cosi
    }
    return result;
}
var resNum = combine(1, 1);
console.log(resNum);
var resStr = combine('1', 1);
console.log(resStr);
console.log(combine('155', 1));
var persona = {
    nome: 'Mario',
    cognome: 'Rossi'
};
var e1 = {
    name: 'Max',
    names: 12,
    privileges: ['create-server'],
    startDate: new Date()
};
