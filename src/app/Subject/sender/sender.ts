import { Component } from '@angular/core';
import { DataService } from '../data-service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sender',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './sender.html',
  styleUrl: './sender.css',
})
export class Sender {

    constructor(private dataService : DataService){}
    send(){
          this.dataService.sendMessage("Hello from Sender!");
          console.log('hello')
    }
}
