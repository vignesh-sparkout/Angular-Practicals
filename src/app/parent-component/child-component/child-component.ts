import { Component, Input,Output,EventEmitter } from '@angular/core';

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
export class ChildComponent {
  @Input()name!:string;
  @Output() messageEvent = new EventEmitter<string>();

ngOnChanges(changes: any) {
  console.log(changes)

}
ngOnInit() {
  console.log('Component initialized');
}
  sendToParent(){
   this.messageEvent.emit(`hello From Child`)
}
}
