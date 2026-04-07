import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls:['./home.css'] 
  
})
export class Home implements OnInit {

   users: string[] = [];

  constructor(private router: Router, private userService: UserService){}
  ngOnInit(){
    this.users = this.userService.getUsers();

  }
  goToAbout(){
    this.router.navigate(['/about'])
  }

  goToContact(){
    this.router.navigate(['/contact'])
  }

  goToProduct(id:number){
    this.router.navigate(['/product', id])
  }

  currentTime: string = "";
count: number = 0;

startInterval() {
  setInterval(() => {
    this.count++;
    console.log("Running...");
  }, 1000);
}
  
}
