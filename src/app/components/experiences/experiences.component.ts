import { Component, input, ViewEncapsulation } from '@angular/core';
import { Experience } from 'src/app/models/resume.model';
import { SectionComponent } from '../section/section.component';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'rb-experiences',
  standalone: true,
  imports: [SectionComponent, TagsComponent],
  template: `
    <rb-section title="Work Experience">
      <div class="flex flex-col gap-8">
        @for (experience of experiences(); track experience.position) {
        <div class="flex flex-col gap-1">
          <h2 class="font-bold text-orange-400">{{ experience.position }}</h2>
          <div class="flex justify-between">
            <h3 class="font-bold">{{ experience.company }}</h3>
            <h4 class="text-sm">
              {{ experience.startDate }} - {{ experience.endDate ?? 'Present' }}
            </h4>
          </div>
          <ul class="list-disc list-inside">
            @for (highlight of experience.highlights; track highlight) {
            <li>{{ highlight }}</li>
            }
          </ul>
          <rb-tags [tags]="experience.tags"></rb-tags>
        </div>
        }
      </div>
    </rb-section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExperiencesComponent {
  experiences = input<Experience[]>();
}
