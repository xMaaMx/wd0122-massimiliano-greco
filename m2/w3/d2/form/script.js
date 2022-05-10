import SuperForms from "./Modules/SuperForms.js"

let nameOptions ={
    type: "text", name : 'nome', classes: 'form-control', id : 'nome'
}
let name = SuperForms.createHTMLInputElement(nameOptions)

let pswOptions = {type: "password", classes: 'form-control', placeholder: 'Password'
} 

let password = SuperForms.createHTMLInputElement(pswOptions)

document.querySelector('body').append(name, password);