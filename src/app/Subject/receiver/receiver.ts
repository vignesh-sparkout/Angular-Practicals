import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data-service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receiver.html',
  styleUrl: './receiver.css',
})
export class Receiver implements OnInit,OnDestroy {
  message: string = '';
   private sub!: Subscription

  constructor(private dataService:DataService){}

  ngOnInit() {
    this.dataService.message$.subscribe(data => {
      this.message = data;
      console.log('message Received')
    });
  }
ngOnDestroy() {
  if (this.sub) {
    this.sub.unsubscribe();
  }
}
}
