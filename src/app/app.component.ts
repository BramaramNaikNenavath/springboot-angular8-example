import { Component, ViewChild } from '@angular/core';
import { LoginService } from './_service/login/login.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Portal';
  ngOnInit() {
  }
}
