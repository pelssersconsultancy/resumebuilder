import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/resume.model';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'rb-courses',
  standalone: true,
  imports: [SectionComponent],
  template: `
    <rb-section title="Courses / Certificates">
      <div class="flex flex-col gap-2">
        @for (course of courses; track course) {
        <div>
          <div class="flex justify-between">
            <h2 class="font-bold">{{ course.name }}</h2>
            <h4 class="text-sm">{{ course.year }}</h4>
          </div>
          <h3 class="text-sm">{{ course.institution }}</h3>
        </div>
        }
      </div>
    </rb-section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CoursesComponent {
  @Input() courses: Course[];
}
