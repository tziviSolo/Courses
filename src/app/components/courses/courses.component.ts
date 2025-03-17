import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-courses',
  imports: [CourseDetailsComponent, MatCardModule, MatDividerModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getAllCourses().subscribe({
      next: response => {
        this.courses = response;
      },
      error:
        error => console.log(error)
    });
  }
}
