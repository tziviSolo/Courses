import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { CoursesComponent } from '../courses/courses.component';
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-management',
  imports: [CourseDetailsComponent,FormsModule],
  templateUrl: './courses-management.component.html',
  styleUrl: './courses-management.component.css'
})
export class CoursesManagementComponent extends CoursesComponent {
  newCourse: Course = new Course(0, "", "", 1);

  constructor(private courseService: CourseService) {
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
    this.courseService.deleteCourseById(id);
  }
}
