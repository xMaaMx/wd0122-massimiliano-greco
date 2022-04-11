//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

var pet = 'gatto';
var Pet = 'cane';
var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa ';
console.log($pet);
document.write($pet)

var _pet = 'leone ';
console.log(_pet);
document.write(_pet)

var _pet2 = 'pantera <br/>';
document.write(_pet2);
console.log(_pet2);

document.write($pet +  ' ' + _pet +  ' ' + _pet2 )

var animali = document.getElementsByClassName('animali')
animali[0].style.background = 'red';
console.log(animali)
animali[1].style.background = 'yellow';

var img = document.createElement('img')
img.src = 'https://www.w3schools.com/images/w3lynx_200.png'
document.getElementsByTagName('body')[0].appendChild(img)
img.style.width = '30px'
img.style.height = '100px'


//var 12 = 'numero';