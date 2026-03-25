import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-router-events',
  imports: [NgIf],
  templateUrl: './router-events.html',
  styleUrl: './router-events.css',
})
export class RouterEvents {
message =''; 
loading= false; 
constructor (private router: Router){
  this.router.events.subscribe(event => {
    if(event instanceof NavigationStart){
      this.message ='Navigation Started: ' + event.url;
      this.loading = true;
    }
    if (event instanceof NavigationEnd){
      this.message = 'Navigation Completed: ' +event.url;
      this.loading = false;
    }
  });
}

}
