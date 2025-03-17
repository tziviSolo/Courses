import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { CoursesComponent } from '../courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseWithLessonsComponent } from "../course-with-lessons/course-with-lessons.component";
import { Lesson } from '../../models/lesson';
import { LessonService } from '../../services/lesson.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-courses-management',
  imports: [FormsModule, CourseWithLessonsComponent, MatCardModule, MatButtonModule, MatDividerModule,MatFormFieldModule,MatInputModule],
  templateUrl: './courses-management.component.html',
  styleUrl: './courses-management.component.css'
})
export class CoursesManagementComponent extends CoursesComponent {
  newCourse: Course = new Course(0, "", "", 1);
  newLesson: Lesson = new Lesson(0, "", "", 2);

  constructor(private courseService: CourseService, private lessonService: LessonService) {
    super(courseService);
  }

  onChangeCourse(changes: 'title' | 'desc' | 'teacherId', content: string) {
    if (changes == 'title')
      this.newCourse.title = content;
    else if (changes == 'desc')
      this.newCourse.description = content;
    else this.newCourse.teacherId = parseInt(content);
  }
  addCourse(course: Course) {
    this.courseService.addCourse(course).subscribe({
      next: (message) => console.log(message),
      error: (err) => console.log(err)
    });
    this.newCourse = new Course(0, "", "", 1);
  }
  editCourse(id: number, course: Course) {
    this.courseService.updateCourseById(id, course).subscribe({
      next: (message) => console.log(message),
      error: (err) => console.log(err)
    });
  }
  deleteCourse(id: number) {
    this.courseService.deleteCourseById(id).subscribe({
      next: (message) => console.log(message),
      error: (err) => console.log(err)
    })
  }

  onChangeLesson(changed: 'title' | 'content' | 'courseId', content: string) {
    if (changed == 'title')
      this.newLesson.title = content;
    else if (changed == 'content')
      this.newLesson.content = content;
    else this.newLesson.courseId = parseInt(content);
  }
  addLesson() {
    this.lessonService.addLessonInCourse(
      this.newLesson.courseId,
      {
        "title": this.newLesson.title,
        "content": this.newLesson.content,
        "courseId": this.newLesson.courseId
      }
    )
      .subscribe({
        next: (message) => console.log(message),
        error: (err) => console.log(err)
      });
    this.newLesson = new Lesson(0, "", "", 2);
  }
}