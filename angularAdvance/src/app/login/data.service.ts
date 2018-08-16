import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  handleLogin(data) {
    return this.http.post('https://reqres.in/api/login',data);
  }
}
