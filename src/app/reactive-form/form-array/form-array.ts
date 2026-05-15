import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormArray
} from '@angular/forms';


@Component({
  selector: 'app-form-array',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-array.html',
  styleUrls: ['./form-array.css'],
})
export class FormArrayComponent  {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      users: this.fb.array([])
      

    });
     this.addUser();

  }

  get users(): FormArray {
    return this.form.get('users')! as FormArray;
  }

// Add Full Form
  addUser() {

    const userForm = this.fb.group({

      username: [
        '',
        Validators.required
      ],

      email: [
        '',
        [Validators.required, Validators.email]
      ],

      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]

    });

    this.users.push(userForm);

  }

   // Remove Form
  removeUser(index: number) {

    this.users.removeAt(index);

  }

  // Submit
  submitForm() {

    console.log(this.form.value);

  }


}