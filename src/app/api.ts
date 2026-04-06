import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',


})
export class Api {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient){}

  // GET
  getUsers(){
    return this.http.get<any[]>(this.apiUrl);
  }

  //POST 
  addUsers(data:any){
    return this.http.post(this.apiUrl, data)
  }
  // PUT
  updateUser(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
