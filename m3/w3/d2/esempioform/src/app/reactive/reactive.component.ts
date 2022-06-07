import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  formG!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formG = this.fb.group({ //form group passa tutte le info al formGroup
      name: '',
      alterEgo: '',
      enemies: '',
      planet: '',
      weaknesses: this.fb.array([]),
      powers: this.fb.array([])

    })
  }

  getErrorControl(name:string, error:string){
    return this.formG.get(name)?.errors![error]
  }

  getControl(name:string){
    return this.formG.get(name) as AbstractControl
  }
  submit(){
    console.log(this.formG.value);
    
  }
  addWeakeness(){
    let fc = new FormControl(null,{
      validators: [Validators.required]
    });
    (this.formG.get('weaknesses') as FormArray).push(fc)
  }
  getFormArray(name:string){
    return (this.formG.get(name) as FormArray).controls
  }

}
