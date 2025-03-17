import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

type CourseToAdd = {
  "title": string,
  "description": string
  "teacherId": number
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly Url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.Url}api/courses`);
  }
  getCourseById(id: number) {
    return this.httpClient.get<Course>(`${this.Url}api/courses/${id}`);
  }
  addCourse(course: CourseToAdd): Observable<CourseToAdd> {
    return this.httpClient.post<CourseToAdd>(`${this.Url}api/courses`, course);
  }
  updateCourseById(id: number, course: Course) {
    return this.httpClient.put<Course>(`${this.Url}api/courses/${id}`, course);
  }
  deleteCourseById(id: number) {
    return this.httpClient.delete(`${this.Url}api/courses/${id}`)
  }
}
