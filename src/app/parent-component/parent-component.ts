import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  standalone: true, 
  imports: [ChildComponent, FormsModule],
  styleUrls: ['./parent-component.css'],
  template: `
    <h2>Parent Component</h2>

    <input [(ngModel)]="parentName" placeholder="Enter name">
<!--Parent => Child -->
<app-child-component [name]="parentName"
 (messageEvent)="receiveMessage($event)"> <!--Child => Parent -->
 </app-child-component>
 <p> Meassage from child: {{message}}</p>
  `
})
export class ParentComponent {
  parentName = 'Vicky';
  message = ""
  receiveMessage (data : string) {
    this.message=data
  }
}