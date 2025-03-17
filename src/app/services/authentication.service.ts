import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type loginUser = {
  "token": string,
  "userId": number,
  "role": "student" | "teacher" | "admin" | "Student" | "Teacher" | "Admin"
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private readonly Url = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User):Observable<any> {
    return this.httpClient.post(`${this.Url}api/auth/register`, user);
  }

  loginUser(user: { email: string, password: string }): Observable<loginUser> {
    return this.httpClient.post<loginUser>(`${this.Url}api/auth/login`, user);
  }
}