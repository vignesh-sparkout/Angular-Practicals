import { Component, OnInit} from '@angular/core';
import { UserService } from '../user';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter';
import { ThemeService} from './theme';

@Component({
  standalone: true,
  selector: 'app-service',
  imports: [CommonModule],
  template: `
    <h3>User List</h3>
    <ul> 
      <li *ngFor="let user of users">{{ user }}</li>
    </ul><hr>
    <h3>CounterService</h3>
     <p>Count: {{ count }}</p>
    <button (click)="increase()">Increment</button><hr>
    <div class="theme-section" [class.dark]="isDark">
      <h3>Theme Service</h3>
      <button (click)="toggle()">Toggle Theme</button>
      <p>{{ isDark ? 'Dark Mode' : 'Light Mode' }}</p>
    </div>
  `,
  styleUrls: ['./service.css']
})
export class ServiceComponent implements OnInit {
 
  users: string[] = [];
  count:number=0;
  isDark: boolean=false

  constructor
  (private userService: UserService,
   private counterService:CounterService,
   private themeService:ThemeService){}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.count =this.counterService.getCount();
  }

 increase(){
  this.counterService.increment();
  this.count = this.counterService.getCount();
 }
 toggle(){
  this.themeService.toggleTheme();
  this.isDark=this.themeService.getTheme();
 }
}
