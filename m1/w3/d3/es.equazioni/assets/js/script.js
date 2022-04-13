function vestiti(){
    console.log( 'Il mio shopping')
    
}
vestiti()

function outfit1 (primocolore, secondocolore, terzocolore){
    const abbinamento1 = `Maglia ${primocolore} Pantalone ${secondocolore} Scarpe ${terzocolore}`
    return abbinamento1
}
console.log(outfit1 ('blue', 'nero', 'bianco'))



function scegliPersonaggio(bottone){
    let display = document.querySelector ('#display')
    display.value = outfit1()
    if (bottone == 'Massi'){
        display.value = outfit1('blu', 'nero', 'bianco')
    }
    else { 
        display.value = outfit1('verde', 'rosso', 'giallo')
    } 
}  


function costoOutfit(spesa) {
    return 2050 - spesa;
}

const costo = costoOutfit(50);
console.log(costo);
document.write ('quanti soldi sono rimasti' + costo + '<br/>')
/*------------*/

function busta(shopping) {
    return shopping - 4;
}

function scegliQuantitativo(blu, nero, bianco) {
    const magliaBlu = busta(blu);
    const pantaloneNero = busta(nero);
    const scarpeBianche = busta (bianco)

    const shopping = `il mio shopping di oggi : busta con ${magliaBlu} maglie blu ${pantaloneNero} pantalone nero ${scarpeBianche} scarpa`;
    return shopping;
}

console.log(scegliQuantitativo(6, 5, 7));
document.write (scegliQuantitativo(6, 5, 7))

