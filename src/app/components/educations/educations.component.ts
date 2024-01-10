import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Education } from 'src/app/models/resume.model';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'rb-educations',
  standalone: true,
  imports: [SectionComponent],
  template: `
    <rb-section title="Education">
      <div class="flex flex-col gap-8">
        @for (education of educations; track education) {
        <div class="flex flex-col gap-1">
          <h2 class="font-bold text-orange-400">{{ education.study }}</h2>
          <div class="flex justify-between">
            <h3 class="font-bold">{{ education.institution }}</h3>
            <h4 class="text-sm">
              {{ education.startDate }} - {{ education.endDate ?? 'Present' }}
            </h4>
          </div>
        </div>
        }
      </div>
    </rb-section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EducationsComponent {
  @Input() educations: Education[];
}
