import { Component, Input } from '@angular/core';
import { Lesson } from '../../models/lesson';
import { FormsModule } from '@angular/forms';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-lesson-details',
  imports: [FormsModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {
  @Input() lesson: Lesson;
  @Input() enableChanges: boolean;

  constructor(private lessonService: LessonService) { }
  
  onChangeLesson(changed: 'title' | 'content', content: string) {
    if (changed == 'title')
      this.lesson.Title = content;
    else
      this.lesson.Content = content;
    this.lessonService.updateCourseById(this.lesson.Id, this.lesson);
  }
}
