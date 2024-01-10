import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { PersonalDetailsComponent } from './personal-details.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PersonalDetailsComponent> = {
  component: PersonalDetailsComponent,
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
type Story = StoryObj<PersonalDetailsComponent>;

export const Primary: Story = {
  args: {
    email: 'john.doe@gmail.com',
    phone: '+31547654478',
    city: 'Maastricht',
    country: 'The Netherlands',
    linkedinID: 'john-doe-123456789',
    githubID: 'johndoe',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
