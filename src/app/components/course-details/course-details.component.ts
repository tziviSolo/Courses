import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-course-details',
  imports: [FormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  @Input() course: Course;
  @Input() enableChanges: boolean;

  constructor(private courseService: CourseService) { }

  onChangeCourse(changes: 'title' | 'desc' | 'teacherId', content: string) {
    if (changes == 'title')
      this.course.title = content;
    else if (changes == 'desc')
      this.course.description = content;
    else this.course.teacherId = parseInt(content);
    this.courseService.updateCourseById(this.course.id, this.course);
  }
}