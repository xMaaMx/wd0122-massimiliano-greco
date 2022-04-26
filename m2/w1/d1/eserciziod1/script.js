let oggi = new Date()
console.log(oggi);
document.write(oggi, '<br>' + '<br>')

console.log(oggi.getTime());

console.log(oggi.getDay());

document.write(oggi.getFullYear(), ' ' + 'anno in corso' + '<br>')
document.write(oggi.getMonth(), ' ' + "mese dell'anno" + '<br>')
document.write(oggi.getDay(),' ' + 'giorno della settimana' + '<br>')
document.write(oggi.getTime(), '<br>')
document.write(oggi.getDay(), '<br>')

let mianascita = new Date (1987,02,05)
console.log(mianascita);
document.write(mianascita, '<br>')

var dataStringa = new Date("April 26, 2022, 15:08:00" + '<br>')
console.log(dataStringa);

let future = new Date()
let futureMinutes = future.getMinutes()
future.setMinutes(futureMinutes + 15)

document.write(future, 'cosi facendo abbiamo la data giusta ma i minuti avanti di 15')

