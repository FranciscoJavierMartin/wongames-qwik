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

export const Black: StoryObj<LogoProps> = {
  args: {
    color: 'black',
  },
  render: (props) => <Logo {...props} />,
};

export const White: StoryObj<LogoProps> = {
  args: {
    color: 'white',
  },
  render: (props) => <Logo {...props} />,
};

export const Normal: StoryObj<LogoProps> = {
  args: {
    color: 'black',
    size: 'normal',
  },
  render: (props) => <Logo {...props} />,
};

export const Large: StoryObj<LogoProps> = {
  args: {
    color: 'black',
    size: 'large',
  },
  render: (props) => <Logo {...props} />,
};

export const ShowOnMobile: StoryObj<LogoProps> = {
  args: {
    color: 'black',
    hideOnMobile: false,
  },
  render: (props) => <Logo {...props} />,
};

export const HideOnMobile: StoryObj<LogoProps> = {
  args: {
    color: 'black',
    hideOnMobile: true,
  },
  render: (props) => <Logo {...props} />,
};
