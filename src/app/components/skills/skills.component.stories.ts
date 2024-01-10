import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { SkillsComponent } from './skills.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Beginner, Competent, Proficient } from '../../models/resume.model';

const meta: Meta<SkillsComponent> = {
  component: SkillsComponent,
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
type Story = StoryObj<SkillsComponent>;

export const Primary: Story = {
  args: {
    title: 'Skills',
    skills: [
      { name: 'Angular', level: Proficient },
      { name: 'Typescript', level: Proficient },
      { name: 'Tailwind', level: Competent },
      { name: 'Svelte', level: Beginner },
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
