let bottone:Element|null = document.querySelector("#myform button")

bottone?.addEventListener('click',function(e){
    e.preventDefault()//blocco l invio del form

    let fields = Array.from(document.querySelectorAll<HTMLInputElement>('#myform input'))

    let values = fields.map((f:HTMLInputElement) => {
        if(f.value)
        return f.value
    })

    console.log(fields);
    

    let [name, lastname,password] = fields


    let valid:boolean = true
    if(password?.value.length < 8){
        valid = false
    }

    for(let field of fields){

        if(!field.value){
            valid = false
        }
    }
    if(valid){
        //invia dati
    }

})

console.log(bottone);
