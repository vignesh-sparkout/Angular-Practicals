import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {
    @Input() items:any [] = []
    @Input() title = '';

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['items']){
        console.log('items Property Changed', changes['items'])
      }
      if(changes['title']){
        console.log('title Property Changed', changes['title'])
      }

    }

}
