import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-cycle',
  imports: [CommonModule],
  templateUrl: './life-cycle.html',
  styleUrls: ['./life-cycle.css'],
  standalone:true
})
export class LifeCycle implements OnInit {
@Input() value: string = '';

  constructor() { 
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  } 
   
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
