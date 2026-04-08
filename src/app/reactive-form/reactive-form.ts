import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  userForm = new FormGroup ({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    skills : new FormArray([])
  })

//Custom Validator
passwordValidator(control:any){
  if (control.value.length <6) {
    return {weakPassword:true}
  }
  return null;
}

//FormArray
  removeSkill(){
    (this.userForm.get('skills') as FormArray)
    .push(new FormControl(''))
  }
  onSubmit(){
    console.log('login form',this.userForm.value)
  };
  getSkillsArray(): FormArray {
  return this.userForm.get('skills') as FormArray;
}

}
