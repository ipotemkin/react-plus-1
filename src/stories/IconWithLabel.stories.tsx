// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWithLabel } from './IconWithLabel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IconWithLabel',
  component: IconWithLabel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconWithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconWithLabel> = (args) => <IconWithLabel {...args} />;

export const Play = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Play.args = {
  iconName: 'play',
  label: 'Play'
};

export const Back = Template.bind({});
Back.args = {
  iconName: 'back',
  label: 'Back'
};

export const Forward = Template.bind({});
Forward.args = {
  iconName: 'forward',
  label: 'Forward'
};

export const Restart = Template.bind({});
Restart.args = {
  iconName: 'restart',
  label: 'estart'
};

export const Close = Template.bind({});
Close.args = {
  iconName: 'close',
  label: 'Close'
};

export const Next = Template.bind({});
Next.args = {
  iconName: 'next',
  label: 'Next'
};

export const Pause = Template.bind({});
Pause.args = {
  iconName: 'pause',
  label: 'Pause'
};

export const Stop = Template.bind({});
Stop.args = {
  iconName: 'stop',
  label: 'Stop'
};
