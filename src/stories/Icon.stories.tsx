// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Play = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Play.args = {
  name: 'play',
};

export const Back = Template.bind({});
Back.args = {
  name: 'back',
};

export const Forward = Template.bind({});
Forward.args = {
  name: 'forward',
};

export const Restart = Template.bind({});
Restart.args = {
  name: 'restart',
};

export const Close = Template.bind({});
Close.args = {
  name: 'close',
};

export const Next = Template.bind({});
Next.args = {
  name: 'next',
};

export const Pause = Template.bind({});
Pause.args = {
  name: 'pause',
};

export const Stop = Template.bind({});
Stop.args = {
  name: 'stop',
};
