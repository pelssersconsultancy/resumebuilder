import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { ExperiencesComponent } from './experiences.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<ExperiencesComponent> = {
  component: ExperiencesComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="m-auto w-1/2 h-screen">
            ${story}
        </div>
      `,
    ),
  ],
};
export default meta;
type Story = StoryObj<ExperiencesComponent>;

export const Primary: Story = {
  args: {
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
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
