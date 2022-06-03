import { Injectable } from '@angular/core';
import { Todo } from '../class/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: any;



  constructor() { }
  
  todos:Todo[] = [
    {
      id: 1,
      title:'Spesa Fatta',
      completed: true
    },
    {
      id: 2,
      title:'Scarpe Comprate',
      completed: true
    },
    {
      id: 3,
      title:'Macchina lavat',
      completed: true
    }
  ]
  addTodo(todo:Todo):void{
    this.todos.push(todo)
  }
  updateTodo(todo:Todo){
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 0, todo)
  }
  deleteTodo(){}
  getTodoById(){}
  getTodo(){
    return this.todos
  }
  
}
