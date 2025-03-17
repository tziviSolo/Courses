import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { Observable } from 'rxjs';

type LessonToAdd = {
  "title": string,
  "content": string,
  "courseId": number
};

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private readonly Url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAllLessonsByCourseId(courseId: number): Observable<Lesson[]> {
    return this.httpClient.get<Lesson[]>(`${this.Url}api/courses/${courseId}/lessons`);
  }
  getLessonsByCourseAndLessonId(courseId: number, id: number): Observable<Lesson> {
    return this.httpClient.get<Lesson>(`${this.Url}api/courses/${courseId}/lessons/${id}`);
  }
  addLessonInCourse(courseId: number, lesson: LessonToAdd): Observable<LessonToAdd> {
    return this.httpClient.post<LessonToAdd>(`${this.Url}api/courses/${courseId}/lessons`, lesson);
  }
  updateCourseById(id: number, lesson: Lesson): Observable<Lesson> {
    return this.httpClient.put<Lesson>(`${this.Url}api/courses/${lesson.courseId}/lessons/${id}`, lesson);
  }
  deleteCourseById(courseId: number, id: number) {
    return this.httpClient.delete(`${this.Url}api/courses/${courseId}/lessons/${id}`);
  }
}
