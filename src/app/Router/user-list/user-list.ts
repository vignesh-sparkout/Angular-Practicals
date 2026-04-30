import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

constructor(private router: Router) {}

  goToUser() {
    const userData = {
      id: 1,
      name: 'Vignesh',
      role: 'Developer'
    };

    this.router.navigate(['/user',userData.id], {
      state: { user: userData }
    });
  }
}
