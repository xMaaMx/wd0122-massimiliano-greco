import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f',{static:true}) form!:NgForm;
  constructor() { }


  ngOnInit(): void {
  
    this.form.statusChanges?.subscribe(status => {
      console.log(status, this.form)
  
    });
    
  }

submit(){
//console.log(form.value);
console.log(this.form);



}
}