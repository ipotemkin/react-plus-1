// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddQM } from './AddQM';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AddQM',
  component: AddQM,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddQM>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddQM> = (args) => <AddQM {...args}>To be or not to be</AddQM>;

export const Question = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Question.args = {
  tooltip: "That is a question!"
};
