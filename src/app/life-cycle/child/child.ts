import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {
 @Input() message: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
  }

}
