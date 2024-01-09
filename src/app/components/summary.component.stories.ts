import type { Meta, StoryObj } from '@storybook/angular';
import { SummaryComponent } from './summary.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SummaryComponent> = {
  component: SummaryComponent,
  title: 'SummaryComponent',
};
export default meta;
type Story = StoryObj<SummaryComponent>;

export const Primary: Story = {
  args: {
    title: 'Full stack (web) developer',
    firstName: 'Robby',
    lastName: 'Pelssers',
    phone: '+31627654926',
    linkedinID: 'robbypelssers',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet non dolor ac rhoncus. Quisque faucibus libero lobortis volutpat tempus. Proin viverra efficitur lectus et viverra. Quisque porttitor sem sed velit ultrices egestas. Morbi fermentum luctus aliquet. Nam aliquet nunc mi, vitae commodo arcu elementum id. Pellentesque egestas turpis massa, sit amet maximus lectus placerat ut. Sed ultricies id augue non porttitor. Praesent vulputate pulvinar finibus. Mauris diam odio, faucibus vel lorem at, facilisis dapibus mi. Cras scelerisque nisi odio, id pulvinar tellus interdum id. Donec aliquet malesuada mi eget tincidunt. Morbi et pulvinar lorem. Fusce mattis odio in dui.',
  },
};

export const Heading: Story = {
  args: {
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    linkedinID: '',
    summary: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
