import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { ResumeComponent } from './resume.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ResumeComponent> = {
  component: ResumeComponent,
  title: 'ResumeComponent',
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
type Story = StoryObj<ResumeComponent>;

export const Primary: Story = {
  args: {
    resume: {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Full stack (web) developer',
      email: '',
      phone: '',
      picture: {
        href: 'https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp',
      },
      address: {
        street: '',
        houseNumber: 0,
        city: '',
        state: '',
        zip: '',
      },
      courses: [],
      education: [],
      experience: [],
      skills: [],
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet non dolor ac rhoncus. Quisque faucibus libero lobortis volutpat tempus. Proin viverra efficitur lectus et viverra. Quisque porttitor sem sed velit ultrices egestas. Morbi fermentum luctus aliquet. Nam aliquet nunc mi, vitae commodo arcu elementum id. Pellentesque egestas turpis massa, sit amet maximus lectus placerat ut. Sed ultricies id augue non porttitor. Praesent vulputate pulvinar finibus.',
      linkedinID: '',
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
