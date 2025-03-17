import { Component, Input } from '@angular/core';
import { Lesson } from '../../models/lesson';
import { FormsModule } from '@angular/forms';
import { LessonService } from '../../services/lesson.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-lesson-details',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
  @Input() lesson: Lesson;
  @Input() enableChanges: boolean;

  constructor(private lessonService: LessonService) { }

  onChangeLesson(changed: 'title' | 'content', content: string) {
    console.log(this.lesson)
    if (changed == 'title')
      this.lesson.title = content;
    else
      this.lesson.content = content;
    this.lessonService.updateCourseById(this.lesson.id, this.lesson).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
  }
}