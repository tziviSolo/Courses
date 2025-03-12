import { Component } from '@angular/core';
import { CourseDetailsComponent } from "../course-details/course-details.component";

@Component({
  selector: 'app-my-courses',
  imports: [CourseDetailsComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {

}
