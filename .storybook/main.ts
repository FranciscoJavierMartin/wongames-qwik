import { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: 'storybook-framework-qwik',
  },
  core: {
    renderer: 'storybook-framework-qwik',
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  viteFinal: async (config: any) => {
    return config;
  },
  staticDirs: ['../public'],
};

export default config;
