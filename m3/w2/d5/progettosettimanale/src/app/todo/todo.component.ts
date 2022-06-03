import { Component, OnInit } from '@angular/core';
import { Todo } from '../class/todo';
import { Todos } from '../interface/todos';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title = 'progettosettimanale';


  
  todos!: Todo[];
  newTodos: Todo;

  constructor(todoService: TodoService){
   this.todos = todoService.getTodo()

   this.newTodos = new Todo(0,'',true)
  }
  ngOnInit():void{
    //this.todoService.addUser(this.newTodo)

  }
}
