import type { Meta, StoryObj } from 'storybook-framework-qwik';
import Main, { type MainProps } from '.';

const meta: Meta = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<MainProps> = {
  render: (props) => <Main {...props} />,
};
