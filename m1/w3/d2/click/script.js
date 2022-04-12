function sfondoRosso (e){


    let blocchi = document.getElementsByClassName('blocco')//array di elementi con la classe blocco

   let colore = e.getAttribute('data-colore')
   console.log(colore)

   if (e.style.backgroundColor == ''){
       e.style.backgroundColor = colore
   }

   e.style.backgroundColor = colore
}
