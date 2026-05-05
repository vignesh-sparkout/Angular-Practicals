import {  AfterContentInit, AfterViewInit, Component,
          ContentChildren, ElementRef,OnDestroy,OnInit,QueryList, ViewChild,Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-simple-message',
  standalone:true,
  imports: [],
  templateUrl: './simple-message.html',
  styleUrl: './simple-message.css',
})
export class SimpleMessage implements AfterContentInit, AfterViewInit,OnInit,OnDestroy{
     counter:number = 0;
      private intervalId:any;
  
    @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>
    ngAfterContentInit(): void {
      this.messageElements.forEach(element => {
        console.log('projected content', element.nativeElement.textContent)
      })
    }
  
    //AfterViewInit
    //focus the input once view initiliaze
    @ViewChild ('nameInput') nameInput!: ElementRef;
    ngAfterViewInit():void {
      this.nameInput.nativeElement.focus()
      console.log('Input Focused')
    }

    ngOnInit(): void {
    this.intervalId= setInterval(() => {
      this.counter++;
      console.log('hello')
    }, 1000);
  }

  //OnDestroy
  ngOnDestroy(): void {
    clearInterval(this.intervalId)
    console.log('OnDestroy Stoped')
    
  }
     
}