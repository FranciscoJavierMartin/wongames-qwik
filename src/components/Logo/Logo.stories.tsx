import type { Meta, StoryObj } from 'storybook-framework-qwik';
import Logo, { type LogoProps } from '.';

const meta: Meta = {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<LogoProps> = {
  render: (props) => <Logo {...props} />,
};
