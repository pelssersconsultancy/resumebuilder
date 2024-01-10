import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { SummaryComponent } from './summary.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SummaryComponent> = {
  component: SummaryComponent,
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="w-1/2">
            ${story}
        </div>
      `
    ),
  ],
};
export default meta;
type Story = StoryObj<SummaryComponent>;

export const Primary: Story = {
  args: {
    jobTitle: 'Full stack (web) developer',
    firstName: 'John',
    lastName: 'Doe',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet non dolor ac rhoncus. Quisque faucibus libero lobortis volutpat tempus. Proin viverra efficitur lectus et viverra. Quisque porttitor sem sed velit ultrices egestas. Morbi fermentum luctus aliquet. Nam aliquet nunc mi, vitae commodo arcu elementum id. Pellentesque egestas turpis massa, sit amet maximus lectus placerat ut. Sed ultricies id augue non porttitor. Praesent vulputate pulvinar finibus. Mauris diam odio, faucibus vel lorem at, facilisis dapibus mi. Cras scelerisque nisi odio, id pulvinar tellus interdum id. Donec aliquet malesuada mi eget tincidunt. Morbi et pulvinar lorem. Fusce mattis odio in dui.',
  },
};

export const Heading: Story = {
  args: {
    jobTitle: '',
    firstName: '',
    lastName: '',
    summary: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
