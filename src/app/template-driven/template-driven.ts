import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-template-driven',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
constructor(private router: Router) {}
user ={
  name:'',
  email:'',
}
onSubmit(form:any){
  if (form.valid) {
  console.log(form.value)
  const fakeToken = 'abc123token';
  localStorage.setItem('token', fakeToken);
  alert('Login Success ');
  this.router.navigate(['/home']);
  }

}

}
