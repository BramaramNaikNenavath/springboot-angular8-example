import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Login } from '../models/Login';
import { LoginService } from '../_service/login/login.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loginObj: Login = new Login();
  loginRS = {};
  isLoggedIn = false;
  constructor(private router: Router, private loginService: LoginService, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    console.log('Login Clicked');
    this.submitted = true;
    this.loginObj.userName = this.userName.value;
    this.loginObj.password = this.password.value;
    this.employeeService.name = this.userName.value;
    this.employeeService.password = this.password.value;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loginService.login(this.loginObj).subscribe(
         data =>{
           console.log(data);
           this.loginRS = data;
           const authenticated = this.loginRS["authenticated"];
           if(authenticated){
             this.isLoggedIn = true;
              this.router.navigate(['/employees'])
           }
         },
         error => {
          if('error' == error.error.type){
            alert('unauthorized user')
          }
          }
      );
    }
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  get userName() {
      return this.loginForm.get('userName');
  }

  get password() {
      return this.loginForm.get('password');
  }

}
