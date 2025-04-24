import { Component } from '@angular/core';
import { ResumeComponent } from '../../components/resume/resume.component';
import {
  Beginner,
  Competent,
  Expert,
  Proficient,
  Resume,
} from '../../models/resume.model';

@Component({
  standalone: true,
  imports: [ResumeComponent],
  selector: 'rb-demo',
  templateUrl: './demo.component.html',
  styles: [],
})
export class DemoComponent {
  title = 'Demo Resume';

  resume: Resume = {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Full stack (web) developer',
    email: 'john.doe@gmail.com',
    phone: '+31547654478',
    picture: {
      href: 'https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp',
    },
    city: 'Maastricht',
    country: 'The Netherlands',
    courses: [
      { institution: 'Udemy', year: 2019, name: 'Angular' },
      { institution: 'Udemy', year: 2019, name: 'Front End Web Developer' },
      { institution: 'Coursera', year: 2018, name: 'Scala' },
    ],
    educations: [
      {
        institution: 'Zuyd Hogeschool',
        study: 'Commercial Engineering',
        startDate: '01-01-2016',
        endDate: '31-12-2020',
      },
      {
        institution: 'Zuyd Hogeschool',
        study: 'Latin-Mathematics',
        startDate: '01-01-2010',
        endDate: '31-12-2015',
      },
    ],
    experiences: [
      {
        company: 'CompanyC',
        startDate: '01-01-2021',
        position: 'Full Stack Developer',
        highlights: [
          'Design and establish user-friendly websites, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%.',
          'Provide daily updates on the progress of various web-related projects.',
          'Developed and implemented a mobile app for Android and iOS.',
        ],
        tags: ['NestJS', 'Angular', 'Tailwind', 'TypeScript', 'MongoDB', 'AWS'],
      },
      {
        company: 'CompanyB',
        startDate: '01-01-2016',
        endDate: '31-12-2020',
        position: 'Frontend Developer',
        highlights: [
          'Design and establish user-friendly websites, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%.',
          'Provide daily updates on the progress of various web-related projects.',
          'Developed and implemented a mobile app for Android and iOS.',
        ],
        tags: ['Angular', 'TypeScript', 'Tailwind', 'NGRX'],
      },
      {
        company: 'CompanyA',
        startDate: '01-01-2012',
        endDate: '31-12-2015',
        position: 'Backend Developer',
        highlights: [
          'Design and establish user-friendly websites, including optimized check-out page that increased user clicks, and subsequently customer purchases by 20%.',
          'Provide daily updates on the progress of various web-related projects.',
          'Developed and implemented a mobile app for Android and iOS.',
        ],
        tags: ['Java', 'Spring', 'Hibernate', 'MySql'],
      },
    ],
    languages: [
      { name: 'Dutch', level: Expert },
      { name: 'English', level: Proficient },
      { name: 'German', level: Beginner },
      { name: 'French', level: Beginner },
    ],
    technicalSkills: [
      { name: 'Angular', level: Proficient },
      { name: 'Typescript', level: Proficient },
      { name: 'Tailwind', level: Competent },
      { name: 'Svelte', level: Beginner },
    ],
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet non dolor ac rhoncus. Quisque faucibus libero lobortis volutpat tempus. Proin viverra efficitur lectus et viverra. Quisque porttitor sem sed velit ultrices egestas. Morbi fermentum luctus aliquet. Nam aliquet nunc mi, vitae commodo arcu elementum id. Pellentesque egestas turpis massa, sit amet maximus lectus placerat ut. Sed ultricies id augue non porttitor. Praesent vulputate pulvinar finibus.',
    linkedinID: 'john-doe-02950992',
    githubID: 'johndoe',
    website: '',
    lastUpdated: '24-04-2025',
  };
}
