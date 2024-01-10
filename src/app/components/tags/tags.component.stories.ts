import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { TagsComponent } from './tags.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TagsComponent> = {
  component: TagsComponent,
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
type Story = StoryObj<TagsComponent>;

export const Primary: Story = {
  args: {
    tags: ['Angular', 'Typescript', 'Tailwind', 'NestJS', 'Java', 'Spring'],
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
