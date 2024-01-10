import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { Resume } from 'src/app/models/resume.model';
import { SummaryComponent } from '../summary/summary.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'rb-resume',
  standalone: true,
  imports: [
    PictureComponent,
    SummaryComponent,
    ExperiencesComponent,
    CoursesComponent,
  ],
  template: `
    <div
      class="flex flex-col gap-4 p-4 h-full rounded-md border border-gray-100"
    >
      <div class="flex gap-2">
        <div class="flex flex-col w-1/4">
          <rb-picture class="mx-auto" [href]="resume.picture.href"></rb-picture>
        </div>
        <div class="flex flex-col w-3/4">
          <rb-summary
            [summary]="resume.summary"
            [firstName]="resume.firstName"
            [lastName]="resume.lastName"
            [jobTitle]="resume.jobTitle"
          ></rb-summary>
        </div>
      </div>
      <hr />
      <div class="flex">
        <div class="flex flex-col w-1/4">
          <div>personal details</div>
        </div>
        <div class="flex flex-col w-3/4 gap-4">
          <rb-experiences [experiences]="resume.experiences" />
          <rb-courses [courses]="resume.courses" />
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ResumeComponent {
  @Input() resume: Resume;
}
