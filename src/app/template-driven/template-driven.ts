import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  standalone:true,
  selector: 'app-template-driven',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
user ={
  name:'',
  email:'',
}
onSubmit(form:any){
  console.log(form.value)
}

}
