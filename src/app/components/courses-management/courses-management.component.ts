import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { CoursesComponent } from '../courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CourseWithLessonsComponent } from "../course-with-lessons/course-with-lessons.component";
import { Lesson } from '../../models/lesson';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-courses-management',
  imports: [FormsModule, CourseWithLessonsComponent],
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
      this.newLesson.Title = content;
    else if (changed == 'content')
      this.newLesson.Content = content;
    else this.newLesson.CourseId = parseInt(content);
  }
  addLesson() {
    console.log(this.newLesson)
    this.lessonService.addLessonInCourse(
      this.newLesson.CourseId,
      {
        "title": this.newLesson.Title,
        "content": this.newLesson.Content,
        "courseId": this.newLesson.CourseId
      }
    )
      .subscribe({
        next: (message) => console.log(message),
        error: (err) => console.log(err)
      });
    this.newLesson = new Lesson(0, "", "", 2);
  }
}
