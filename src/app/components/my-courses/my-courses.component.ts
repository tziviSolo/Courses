import { Component } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { CourseService } from '../../services/course.service';
import { CourseWithLessonsComponent } from "../course-with-lessons/course-with-lessons.component";

@Component({
  selector: 'app-my-courses',
  imports: [CourseWithLessonsComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent extends CoursesComponent {
  constructor(courseService: CourseService) {
    super(courseService);
  }
}