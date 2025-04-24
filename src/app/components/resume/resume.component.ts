import { Component, input, ViewEncapsulation } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { Resume } from 'src/app/models/resume.model';
import { SummaryComponent } from '../summary/summary.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { CoursesComponent } from '../courses/courses.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationsComponent } from '../educations/educations.component';
import { LastUpdatedComponent } from '../last-updated/last-updated.component';

@Component({
  selector: 'rb-resume',
  standalone: true,
  imports: [
    PictureComponent,
    SummaryComponent,
    ExperiencesComponent,
    CoursesComponent,
    ContactComponent,
    SkillsComponent,
    EducationsComponent,
    LastUpdatedComponent,
  ],
  template: `
    @let myResume = resume();
    <div
      class="flex flex-col gap-2 h-full rounded-md  border-gray-400 bg-white"
    >
      <div class="flex">
        <div class="flex justify-center flex-col w-[75mm]">
          <rb-picture
            class="mx-auto w-48 h-48"
            [href]="myResume.picture.href"
          ></rb-picture>
        </div>
        <div class="flex justify-center  flex-col w-[135mm]">
          <rb-summary
            [summary]="myResume.summary"
            [firstName]="myResume.firstName"
            [lastName]="myResume.lastName"
            [jobTitle]="myResume.jobTitle"
          ></rb-summary>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col w-[75mm] gap-4 p-4 bg-neutral-50">

          <rb-contact
            [email]="myResume.email"
            [phone]="myResume.phone"
            [city]="myResume.city"
            [country]="myResume.country"
            [linkedinID]="myResume.linkedinID"
            [githubID]="myResume.githubID"
          ></rb-contact>
          <rb-skills
            [skills]="myResume.languages"
            title="Languages"
          /><!-- [display]="'continuous'" -->
          <rb-last-updated [date]="myResume.lastUpdated"></rb-last-updated>
        </div>
        <div class="flex flex-col w-[135mm] gap-4 p-4 ">
          <rb-experiences [experiences]="myResume.experiences" />
          <rb-educations [educations]="myResume.educations" />
          <rb-courses [courses]="myResume.courses" />
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ResumeComponent {
  resume = input.required<Resume>();
}
