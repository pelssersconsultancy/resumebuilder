import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { CoursesComponent } from './courses.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CoursesComponent> = {
  component: CoursesComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="m-auto w-1/2 h-screen">
            ${story}
        </div>
      `
    ),
  ],
};
export default meta;
type Story = StoryObj<CoursesComponent>;

export const Primary: Story = {
  args: {
    courses: [
      { institution: 'Udemy', year: 2019, name: 'Angular' },
      { institution: 'Udemy', year: 2019, name: 'Front End Web Developer' },
      { institution: 'Coursera', year: 2018, name: 'Scala' },
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
