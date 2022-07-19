// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StateButton } from './StateButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/StateButton',
  component: StateButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StateButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StateButton> = (args) => <StateButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  text: 'Button',
};

export const Action = Template.bind({});
Action.args = {
  text: 'Button',
  state: 'action'
};

export const Raised = Template.bind({});
Raised.args = {
  text: 'Button',
  state: 'raised'
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Button',
  state: 'outlined'
};

export const OutlinedInfo = Template.bind({});
OutlinedInfo.args = {
  text: 'Button',
  state: 'outlined-info'
};

export const OutlinedDanger = Template.bind({});
OutlinedDanger.args = {
  text: 'Button',
  state: 'outlined-danger'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  state: 'flat-secondary'
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  text: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  text: 'Button',
};
