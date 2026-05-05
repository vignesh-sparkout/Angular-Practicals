import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

name ='vicky'
isdisabled= true;

Fruits = 'apple'

changeFruits(){
this.Fruits ='mango'
}
}
