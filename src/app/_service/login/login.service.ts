import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public login(login: Login) {
    console.log('Invoked Login Service '+login.userName);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(login.userName + ':' + login.password) });
    return this.httpClient.post(`${this.URL}` + 'employeelogin', login, {headers});
  }
}
