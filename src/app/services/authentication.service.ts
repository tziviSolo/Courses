import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser(user: User) {

  }

  loginUser(user: { username: string, password: string }) {

  }
}
