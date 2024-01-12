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
  selector: 'rb-robbypelssers',
  templateUrl: './robbypelssers.component.html',
  styleUrl: './robbypelssers.component.scss',
})
export class RobbyPelssersComponent {
  title = 'Resume Robby Pelssers';

  resume: Resume = {
    firstName: 'Robby',
    lastName: 'Pelssers',
    jobTitle: 'Full stack (web) developer',
    email: 'pelssersconsultancy@gmail.com',
    phone: '+31627654926',
    picture: {
      href: '/assets/robby.png',
    },
    city: 'Landgraaf',
    country: 'The Netherlands',
    courses: [
      {
        institution: 'TheBurningMonk',
        year: 2023,
        name: 'AppSync Masterclass',
      },
      {
        institution: 'Trilon',
        year: 2023,
        name: 'NestJS Architecture & Advanced Patterns',
      },
      {
        institution: 'Trilon',
        year: 2023,
        name: 'NestJS Advanced Concepts',
      },
      {
        institution: 'Udemy',
        year: 2023,
        name: 'NestJS Microservices: Build & Deploy a Scaleable Backend',
      },
      {
        institution: 'Udemy',
        year: 2023,
        name: 'NestJS: The complete developer guide',
      },
      {
        institution: 'Udemy',
        year: 2023,
        name: 'Tailwind CSS From Scratch',
      },
      {
        institution: 'Trilon',
        year: 2022,
        name: 'NestJS Authentication & Authorization',
      },
      {
        institution: 'Trilon',
        year: 2022,
        name: 'NestJS GraphQL Course',
      },
      {
        institution: 'Udemy',
        year: 2021,
        name: 'Understanding TypeScript',
      },
      {
        institution: 'Udemy',
        year: 2021,
        name: 'Build Data Visualizations with D3.js & Firebase',
      },
      {
        institution: 'Udemy',
        year: 2021,
        name: 'Mastering data visualization in D3.js',
      },
      {
        institution: 'Udemy',
        year: 2020,
        name: 'Build Responsive Real World Websites with HTML5 and CSS3',
      },
      {
        institution: 'Udemy',
        year: 2020,
        name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
      },
      {
        institution: 'Udemy',
        year: 2020,
        name: 'Serverless Framework Bootcamp: Node.js, AWS & Microservices',
      },
      {
        institution: 'Udemy',
        year: 2020,
        name: 'Svelte.js - The complete guide',
      },
      {
        institution: 'Udemy',
        year: 2020,
        name: 'Cypress: Web Automation Testing from Zero to Hero',
      },
      {
        institution: 'Trilon',
        year: 2020,
        name: 'NestJS Fundamentals',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Akka Serialization with Scala',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Akka Remoting and Clustering with Scala',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Akka HTTP with Scala',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Akka Streams with Scala',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Akka Persistence with Scala',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Akka Essentials with Scala',
      },
      {
        institution: 'Udemy',
        year: 2019,
        name: 'Responsive Web Design Essentials - HTML5 CSS3 Bootstrap',
      },
      {
        institution: 'Udemy',
        year: 2018,
        name: 'Angular Advanced MasterClass',
      },
      {
        institution: 'Udemy',
        year: 2018,
        name: 'AWS DynamoDB - The complete guide',
      },
      {
        institution: 'Udemy',
        year: 2018,
        name: 'NGRX The complete guide',
      },
      {
        institution: 'Udemy',
        year: 2017,
        name: 'The complete Sass & SCSS Course: From Beginner to Advanced',
      },
      {
        institution: 'Udemy',
        year: 2017,
        name: 'The complete NodeJS Developer Course',
      },
      {
        institution: 'Udemy',
        year: 2017,
        name: 'Angular - The complete guide',
      },
      {
        institution: 'Udemy',
        year: 2017,
        name: 'Vue - The complete guide',
      },
      {
        institution: 'Hasso Plattner Institut',
        year: 2013,
        name: 'Semantic web technologies',
      },
      {
        institution: 'Stanford University (MOOC)',
        year: 2013,
        name: 'Introduction to databases',
      },
      {
        institution: '10gen',
        year: 2012,
        name: 'M101: MongoDB for Developers',
      },
      { institution: '10gen', year: 2012, name: 'M101: MongoDB for DBAs' },
      {
        institution: 'Coursera',
        year: 2012,
        name: 'Functional programming principles in Scala',
      },
      {
        institution: 'Udacity',
        year: 2012,
        name: 'CS212: Design of computer programs',
      },
      {
        institution: 'Udacity',
        year: 2012,
        name: 'CS373: Programming a robotic car',
      },
      {
        institution: 'Udacity',
        year: 2012,
        name: 'CS101: Building a search engine',
      },
      {
        institution: 'Stanford University (MOOC)',
        year: 2011,
        name: 'Introduction to artificial intelligence',
      },
      {
        institution: 'Stanford University (MOOC)',
        year: 2011,
        name: 'Introduction to machine learning',
      },
      { institution: 'SpringSource', year: 2011, name: 'Spring integration' },
      { institution: 'SpringSource', year: 2009, name: 'Spring core' },
      {
        institution: 'learnit',
        year: 2008,
        name: 'Design patterns (Gang of four)',
      },
      { institution: 'Sun', year: 2008, name: 'Sun Certified Java Programmer' },
      {
        institution: 'Vodafone',
        year: 2004,
        name: 'Unix - basic and advanced',
      },
    ],
    educations: [
      {
        institution: 'University Hasselt (BE)',
        study: 'Business Engineering in Management Information Systems',
        startDate: '01-09-1995',
        endDate: '30-06-2002',
      },
      {
        institution: 'Heilig Hart College Lanaken (BE)',
        study: 'Latin-Mathematics',
        startDate: '01-09-1991',
        endDate: '30-06-1995',
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
      { name: 'Java', level: Proficient },
      { name: 'Typescript', level: Proficient },
      { name: 'Angular', level: Proficient },
      { name: 'Tailwind', level: Competent },
      { name: 'Svelte', level: Beginner },
    ],
    summary:
      'I am a passionate full stack software developer with +20 years of experience. I programmed in several languages like Java, Scala, Python, Typescript and used different datasources like MySql, MongoDB, DynamoDB, XML Databases. I experimented with frontend frameworks like Svelte, Vue and Angular.  I decided to overhaul my resume made in Word and created this new version in Angular using pure html and tailwind in January 2024.',
    linkedinID: 'robbypelssers',
    githubID: 'pelssersconsultancy',
    website: '',
  };
}
