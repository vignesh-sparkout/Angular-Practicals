import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-router-events',
  standalone: true,
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
  this.routerSub = this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.log(`START: ${event.url}`);
    }

    if (event instanceof NavigationEnd) {
      this.loading = false;
      this.log(`END: ${event.urlAfterRedirects}`);
    }

    if (event instanceof NavigationCancel) {
      this.loading = false;
      this.log(`CANCEL: ${event.url}`);
    }

    if (event instanceof NavigationError) {
      this.loading = false;
      this.log(`ERROR: ${event.url}`);
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
