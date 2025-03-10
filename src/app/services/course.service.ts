import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly Url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.Url}api/courses`);
  }
}
