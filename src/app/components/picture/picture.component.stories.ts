import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { PictureComponent } from './picture.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PictureComponent> = {
  component: PictureComponent,
  title: 'PictureComponent',
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
type Story = StoryObj<PictureComponent>;

export const Primary: Story = {
  args: {
    href: 'https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp',
    // href: 'https://www.dropbox.com/scl/fi/h04gqj1kpzr3ls7zyl3mh/thumbnail_robby.png',
  },
};

export const Heading: Story = {
  args: {
    href: 'https://www.dropbox.com/scl/fi/h04gqj1kpzr3ls7zyl3mh/thumbnail_robby.png?rlkey=zv1rrj8hsnlsxcg6di5xldz9b&dl=0',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/summary works!/gi)).toBeTruthy();
  },
};
