class Todo{

    constructor(_target){
       this.target = document.querySelector(_target)
       this.testo
       this.bottone
       this.lista
       this.creaHTMLBase()
 
       this.bottone.addEventListener('click',() => {
          this.creaHTMLElementoLista()
       })
    }
 
    creaHTMLBase(){
       let input = document.createElement('input')
       input.type = 'text'
       input.classList.add('form-control')
       input.placeholder = 'Nome'
       
       
       let input2 = document.createElement('input')
       input2.type = 'text'
       input2.classList.add('form-control')
       input2.placeholder = 'Cognome'
       
       this.testo = input 
       this.testo = input2
 
 
       let button = document.createElement('button')
       button.innerHTML = 'Inserisci'
       button.classList.add('btn','btn-primary')
 
       this.bottone = button
 
       let areaTarget = document.createElement('div')
       this.lista = areaTarget
 
       this.target.append(input, input2, button, areaTarget)
    }
 
    creaHTMLElementoLista(){
       let div  = document.createElement('div')
       div.innerHTML = this.testo.value
       div.classList.add('alert','alert-success')
       
       let deleteButton = this.eliminaHTMLElementoLista(div)

 
       div.append(deleteButton)
       this.lista.append(div)
       this.testo.value = ''
    }
 
    eliminaHTMLElementoLista(genitore){
       let close = document.createElement('button')
       close.innerHTML = 'Fatto'
 
       close.addEventListener('click',function(){
          genitore.remove()
       })
 
       return close;
    }
 
 }

 new Todo('#todo')