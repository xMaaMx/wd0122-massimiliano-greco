import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../class/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {


  constructor(
    private todoservice: TodoService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  id:number = 0
  title:undefined | string 
  completed:boolean = true
  

  save(){
    
    let newTodo = new Todo(this.id, this.title as string, this.completed)
    this.todoservice.addTodo(newTodo)
    this.router.navigate(
      ['/']
    )
  }
  modifica(){
    let newTodo = new Todo(this.id, this.title as string, this.completed)
    this.todoservice.updateTodo(newTodo)
    this.router.navigate(
      ['/']
    )
}}
