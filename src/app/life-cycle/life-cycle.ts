import {
  Component,OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit,AfterViewChecked, OnDestroy,SimpleChanges,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from "./child/child";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule, Child,FormsModule],
  templateUrl: './life-cycle.html',
})
export class LifeCycle
  implements
    OnInit, OnChanges,DoCheck,AfterContentInit,
    AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  value: string = '';  
  users: string[] = [];

  ngOnInit() {
    console.log('1.ngOnInit called');

    // simulate API call
    this.users = ['Vignesh', 'John', 'Arun'];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7. ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy');
  }

  submit(){
    console.log("click to the submit button")
  }



}
