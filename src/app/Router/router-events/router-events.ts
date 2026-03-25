import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router, NavigationStart,NavigationEnd,NavigationCancel,NavigationError,Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-router-events',
  imports: [CommonModule],
  templateUrl: './router-events.html',
  styleUrl: './router-events.css',
})
export class RouterEvents implements OnInit, OnDestroy{

loading = false;
eventLogs: string[]=[]
private routerSub!: Subscription;
constructor( private router:Router){}

ngOnInit() {
  this.router.events.subscribe(event => {

    console.log(event); 

    if (event instanceof NavigationStart) {
      console.log('START:', event.url);
    }

    if (event instanceof NavigationEnd) {
      console.log('END:', event.url);
    }

    if (event instanceof NavigationCancel) {
      console.log('CANCEL:', event.url);
    }

    if (event instanceof NavigationError) {
      console.log('ERROR:', event.url);
    }

  });
}
log(message:string){
  this.eventLogs.push(message)
}
ngOnDestroy() {
  this.routerSub.unsubscribe();
  
}

}
