import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly Url = "http://localhost:3000/";
  
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Url}api/users`);
  }

  getUserById(password: string): Observable<User> {
    return this.http.get<User>(`${this.Url}api/users/${password}`);
  }
  updateUserById() {

  }
  deleteUserById() {

  }
}
