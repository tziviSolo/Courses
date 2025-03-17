import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly Url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Url}api/users`);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.Url}api/users/${id}`);
  }
  updateUserById(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.Url}api/users/${id}`, user);
  }
  deleteUserById(id: number) {
    return this.http.delete<User>(`${this.Url}api/users/${id}`);
  }
}