import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone:true,
  imports: [],
  styleUrl: './child-component.css',
  template:`<h3>Child Component</h3>
  <p>Received: {{ name }} </p>

  <button (click)="sendToParent()">Send To Parent </button>
  `
})
export class ChildComponent implements OnChanges {
  @Input()name!:string;
  @Output() messageEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ');
    const change = changes['name'];
    if (changes['name']) {
    console.log('Old:', changes['value'].previousValue);
    console.log('New:', changes['value'].currentValue);
    }
  }
ngOnInit() {
  console.log('Component initialized');
}
  sendToParent(){
   this.messageEvent.emit(`hello From Child`)
}


}
