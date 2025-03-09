import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  //לייבא ע"י בקשה מהשרת
  arrUsers: User[] = [new User("name", "email", "password", "teacher")];

  getAllUsers() {
    return this.arrUsers;
  }

  getUserById(){

  }
  updateUserById(){
    
  }
  deleteUserById(){
    
  }
}
