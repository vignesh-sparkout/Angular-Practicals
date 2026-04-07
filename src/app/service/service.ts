import { Component, OnInit} from '@angular/core';
import { UserService } from './user';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter';
import { ThemeService} from './theme';

@Component({
  standalone: true,
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl:'./service.html' ,
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
