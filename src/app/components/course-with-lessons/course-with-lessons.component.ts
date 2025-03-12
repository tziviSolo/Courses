import { Component, Input, OnInit } from '@angular/core';
import { CourseDetailsComponent } from "../course-details/course-details.component";
import { Course } from '../../models/course';
import { Lesson } from '../../models/lesson';
import { LessonService } from '../../services/lesson.service';
import { LessonDetailsComponent } from "../lesson-details/lesson-details.component";

@Component({
  selector: 'app-course-with-lessons',
  imports: [CourseDetailsComponent, LessonDetailsComponent],
  templateUrl: './course-with-lessons.component.html',
  styleUrl: './course-with-lessons.component.css'
})
export class CourseWithLessonsComponent implements OnInit {
  @Input() changing: boolean;
  @Input() course: Course;
  lessons: Lesson[];

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonService.getAllLessonsByCourseId(this.course.id).subscribe({
      next: (data) => this.lessons = data,
      error: (err) => console.log(err)
    })
  }
}
