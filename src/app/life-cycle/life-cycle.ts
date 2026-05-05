import {
  Component,OnInit, OnChanges, DoCheck,  
  SimpleChanges,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from "./child/child";
import { FormsModule } from '@angular/forms';
import { SimpleMessage } from "./simple-message/simple-message";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule, Child, FormsModule, SimpleMessage],
  templateUrl: './life-cycle.html',

})
export class LifeCycle implements OnInit, OnChanges,DoCheck {  


        

      //ngOnChanges
      itemList = [
        {id:1, Name:'Vicky'},
        {id:2, Name:'Aravind'},
        {id:3, Name:'Dhina'},
        {id:4, Name:'Ram'},
        {id:5, Name:'Lokesh'}
      ]
      title = 'Movies'
      message=''
      furniture='Wooden Table'
      prevFurniture='Wooden Table'

      ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges Called')
      }

      //OnInit
      ngOnInit(): void {
        this.message = "Welcome to Angular"
        console.log('OnInit Called') 
       
      }
    //DoCheck
      ngDoCheck(): void {
       if (this.furniture !== this.prevFurniture) {
        console.log('Property Chnaged',this.furniture)
        this.prevFurniture = this.furniture
        }
      } 

} 
