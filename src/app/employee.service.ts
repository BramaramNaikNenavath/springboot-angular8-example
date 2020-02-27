import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/';
  name = 'bnn';
  password = 'bnn';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    console.log('getting employee with id > '+id);
    return this.http.get(`${this.baseUrl}` + 'employees/' + `${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.name + ':' + this.password) });
    return this.http.post(`${this.baseUrl}` + 'saveemployee', employee,{headers});
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    console.log("update employee service for id > "+id );
    console.log(this.name)
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.name + ':' + this.password) });
    return this.http.put(`${this.baseUrl}` + 'update/' + `${id}`, value, {headers});
  }

  deleteEmployee(id: number): Observable<any> {
    console.log("delete employee > "+id);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.name + ':' + this.password) });
    return this.http.delete(`${this.baseUrl}` + 'delete/' + `${id}`, {headers});
  }

  getEmployeesList(): Observable<any> {
    console.log('getting all employees')
    return this.http.get(`${this.baseUrl}` + 'employees');
  }
}
