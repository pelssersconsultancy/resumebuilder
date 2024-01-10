import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { ResumeComponent } from './resume.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  Beginner,
  Competent,
  Expert,
  Proficient,
} from 'src/app/models/resume.model';

const meta: Meta<ResumeComponent> = {
  component: ResumeComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="m-auto w-2/3 h-screen">
            ${story}
        </div>
      `
    ),
  ],
};
export default meta;
type Story = StoryObj<ResumeComponent>;

export const Primary: Story = {
  args: {
    resume: {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Full stack (web) developer',
      email: 'john.doe@gmail.com',
      phone: '',
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
          tags: [
            'NestJS',
            'Angular',
            'Tailwind',
            'TypeScript',
            'MongoDB',
            'AWS',
          ],
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
      technicalSkills: [
        { name: 'Angular', level: Proficient },
        { name: 'Typescript', level: Proficient },
        { name: 'Tailwind', level: Competent },
        { name: 'Svelte', level: Beginner },
      ],
      languages: [
        { name: 'Dutch', level: Expert },
        { name: 'English', level: Proficient },
        { name: 'German', level: Beginner },
        { name: 'French', level: Beginner },
      ],
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet non dolor ac rhoncus. Quisque faucibus libero lobortis volutpat tempus. Proin viverra efficitur lectus et viverra. Quisque porttitor sem sed velit ultrices egestas. Morbi fermentum luctus aliquet. Nam aliquet nunc mi, vitae commodo arcu elementum id. Pellentesque egestas turpis massa, sit amet maximus lectus placerat ut. Sed ultricies id augue non porttitor. Praesent vulputate pulvinar finibus.',
      linkedinID: 'john-doe-02950992',
      website: '',
    },
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
