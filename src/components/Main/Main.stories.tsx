import type { Meta, StoryObj } from 'storybook-framework-qwik';
import Main from '.';

const meta: Meta = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {
  render: (props) => <Main {...props} />,
};
