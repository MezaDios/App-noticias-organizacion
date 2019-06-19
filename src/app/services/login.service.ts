import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/currentUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: CurrentUser;

  readonly URL_API = 'https://rest-api-noticias-organizacion.herokuapp.com/api/login';

  constructor(private http: HttpClient) { }

  getLogin(keys: { user: string, password: string }) {
    return this.http.post(`${this.URL_API}`, keys);
  }

  createUser(data: { user: string, password: string }) {
    return this.http.post(`${this.URL_API}/create`, data);
  }

}
