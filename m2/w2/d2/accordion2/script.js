let bottoni = document.querySelectorAll('button')//All selezione tutti gli elementi
let contents = document.querySelectorAll('.content')

//for(let i= 0; i < bottoni.length; i++){

for(let bottone of bottoni){ //si utilizza ogni volta che si vuole ciclare piu elementi

    bottone.addEventListener('click', function(){

        let daChiudere = document.querySelector('.content.open')
        
        
        if(daChiudere != null){
            daChiudere.classList.remove('open')
        }

        
        let target = bottone.getAttribute('data-target')
        let daAprire = document.querySelector(target)

        if(daChiudere !=  daAprire){
            document.querySelector(target).classList.toggle('open')
        }
    })
}

        //bottone.nextElementSibling.classList.toggle('open') //toggle è un bottone
        
    


/*bottoni.forEach(bottone =>{
    bottone.addEventListener('click',function(){
        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = 'bottone-'+i
})//foreach non funzione con getelementbyid o byclassname
})*/


