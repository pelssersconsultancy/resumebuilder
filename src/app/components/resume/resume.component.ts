import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { Resume } from 'src/app/models/resume.model';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'rb-resume',
  standalone: true,
  imports: [PictureComponent, SummaryComponent],
  template: `
    <div
      class="flex flex-col gap-1 p-2 h-full rounded-md border border-gray-100"
    >
      <div class="flex gap-2">
        <div class="flex flex-col w-1/4" style="border: 1px dashed green;">
          <rb-picture class="mx-auto" [href]="resume.picture.href"></rb-picture>
        </div>
        <div class="flex flex-col w-3/4" style="border: 1px dashed blue;">
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
        <div class="flex flex-col w-3/4">
          <div>Work Experience</div>
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
