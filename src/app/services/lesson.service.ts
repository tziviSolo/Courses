import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private readonly Url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getAllLessonsByCourseId(id: number): Observable<Lesson[]> {
    return this.httpClient.get<Lesson[]>(`${this.Url}api/courses/${id}/lessons`);
  }

}
