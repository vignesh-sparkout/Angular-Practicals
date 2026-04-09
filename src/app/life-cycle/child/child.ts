import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {
    @Input() data: string = '';

  previous: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.previous = changes['data'].previousValue;
      console.log('Old:', changes['data'].previousValue);
      console.log('New:', changes['data'].currentValue);
    }
  }

}
