import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrlRegister:string ='Http://localhost:4201/register'
  apiUrl:string = 'Http://localhost:4201/users'

  registerUser(user:any){
    return this.http.post(this.apiUrl, user)
  }
  getUser(id:number){
    return this.http.get(this.apiUrl + '/'+ id)
  }
}
