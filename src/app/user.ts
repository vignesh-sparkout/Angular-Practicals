import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users = ["Vignesh", "Aravindh", "Kishore", "Dhina", "Naveen"];

  getUsers() {
    return this.users;
  }

}