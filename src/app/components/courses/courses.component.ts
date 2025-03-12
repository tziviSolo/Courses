import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { CourseDetailsComponent } from "../course-details/course-details.component";

@Component({
  selector: 'app-courses',
  imports: [CourseDetailsComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe({
      next: response => {
        this.courses = response;
        console.log(this.courses)
      },
      error:
        error => console.log(error)
    });
  }
}
