import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercizio day 1';
  name = 'Massimiliano'
  nomi:any[] = 
[
  {nome: "Luca", cognome: "Nobili", eta: 20},
  {nome: "Massimiliano", cognome: "Greco", eta: 21},
  {nome: "Marco", cognome: "Di Gruso", eta: 22},
  {nome: "Riccardo", cognome: "Muzietti", eta: 23}
]


elimina(){
 this.nomi.pop()
}
aggiungi(){
  this.nomi.push()
}
}


