import { Component,  OnInit } from '@angular/core';
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
export class Home implements OnInit  {

   users: string[] = [];
  currentTime: string = "";
  count: number = 0;
  constructor(private router: Router, private userService: UserService){}
  ngOnInit(){
    this.users = this.userService.getUsers();
    console.log("ngOnInit")

  }
  goToAbout(){
    this.router.navigate(['/about'])
  }

  goToProduct(id:number){
    this.router.navigate(['/product', id])
  }
// goToProduct(user: any) {
//   this.router.navigate(['/product', user.id], {
//     state: { userData: user }
//   });
// }
  

  startInterval() {
    setInterval(() => {
      this.count++;
      console.log("Running...");
    }, 1000);
  }
}

