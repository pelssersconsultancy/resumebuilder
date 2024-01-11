import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { Resume } from 'src/app/models/resume.model';
import { SummaryComponent } from '../summary/summary.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { CoursesComponent } from '../courses/courses.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationsComponent } from '../educations/educations.component';

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
  ],
  template: `
    <div
      class="flex flex-col gap-2 h-full rounded-md  border-gray-400 bg-white"
    >
      <div class="flex">
        <div class="flex justify-center flex-col w-2/6">
          <rb-picture
            class="mx-auto w-48 h-48"
            [href]="resume.picture.href"
          ></rb-picture>
        </div>
        <div class="flex justify-center  flex-col w-4/6">
          <rb-summary
            [summary]="resume.summary"
            [firstName]="resume.firstName"
            [lastName]="resume.lastName"
            [jobTitle]="resume.jobTitle"
          ></rb-summary>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col w-2/6 gap-4 p-4 bg-neutral-50">
          <rb-contact
            [email]="resume.email"
            [phone]="resume.phone"
            [city]="resume.city"
            [country]="resume.country"
            [linkedinID]="resume.linkedinID"
            [githubID]="resume.githubID"
          ></rb-contact>
          <rb-skills
            [skills]="resume.technicalSkills"
            title="Skills"
            display="continuous"
          />
          <rb-skills [skills]="resume.languages" title="Languages" />
        </div>
        <div class="flex flex-col w-4/6 gap-4 p-4 ">
          <rb-experiences [experiences]="resume.experiences" />
          <rb-courses [courses]="resume.courses" />
          <rb-educations [educations]="resume.educations" />
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
