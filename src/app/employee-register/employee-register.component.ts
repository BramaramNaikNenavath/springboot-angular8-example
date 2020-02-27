import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

 registerForm: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      givenName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  register() {
    alert('register clicked');
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

}
