import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { SectionComponent } from './section.component';

import { within } from '@storybook/test';
import { expect } from '@storybook/test';

const meta: Meta<SectionComponent> = {
  component: SectionComponent,
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
type Story = StoryObj<SectionComponent>;

export const Primary: Story = {
  args: {
    title: 'Work Experience',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
