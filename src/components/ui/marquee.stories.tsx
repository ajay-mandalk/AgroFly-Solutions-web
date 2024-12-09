import type { Meta, StoryObj } from '@storybook/react';

import Marquee from './marquee';

const meta = {
  component: Marquee,
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};