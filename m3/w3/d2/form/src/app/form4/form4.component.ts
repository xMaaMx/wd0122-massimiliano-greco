import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

  
  //REACTIVE FORMS

  form!:FormGroup;

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
     
        email:this.fb.control(null, [Validators.required, Validators.email, this.emailProibite]),
        password:this.fb.control(null,Validators.required),
        city: this.fb.control(null),
        sports :this.fb.array([])
      })
      //ricevo lo stream dei cambi di stato
      this.form.statusChanges.subscribe(value => console.log(value));
      //ricevo lo stream dei cambi di valore
      this.form.valueChanges.subscribe(value => console.log(value));
      
  }

  addSport(){
    let control = this.fb.control(null);//creo un nuovo form control
    (this.form.get('sports') as FormArray).push(control)
  }

  getSportsFields(){
    return (this.form.get('sports') as FormArray).controls
  }

  getFormC(name:string){
    return this.form.get(name)
  }
  listaEmailProibite:string[] = ['test@test.it', 'prova@prova.it']
  emailProibite = (FormControl:FormControl)=>{
    if(this.listaEmailProibite.includes(FormControl.value)){
      return {
        emailProibita : true
      }
      
    }
    return null
  }

submit(){
//console.log(form.value);
console.log(this.form);



}}