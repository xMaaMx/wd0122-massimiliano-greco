let bottone = document.querySelector('#myForm button')

bottone.addEventListener('click',function(event){
    
    event.preventDefault();// prevengo l invio del form bloccando il comportamento standard del bottone

    
    let nome = document.querySelector('#nome')
    let password = document.querySelector('#password')
    let valid = true


    if(nome.value == ''){
        console.log(nome.nextElementSibling);
        nome.nextElementSibling.innerHTML = 'Devi inserire il nome' //nextElement va inserito sempre seguito dall'elemento da richiamare
        valid = false
       
    }else{
        nome.nextElementSibling.innerHTML = ''
    }
    if(password.value == ''){
        console.log(password.nextElementSibling);
        password.nextElementSibling.innerHTML = 'Devi inserire la password'
        valid = false
    }

    if(valid){
        //invio il form
        //posso inviare i dati con una chiamata ajax in POST
        //oppure: 
        document.querySelector('#myForm').submit()
    }


})