import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { EducationsComponent } from './educations.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EducationsComponent> = {
  component: EducationsComponent,
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
type Story = StoryObj<EducationsComponent>;

export const Primary: Story = {
  args: {
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
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
