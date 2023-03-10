// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['small', 'regular', 'medium', 'large'],
    },
    icon: {
      control: {
        type: 'inline-radio',
      },
      options: ['download', 'contact', 'next'],
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary Button',
  size: 'regular',
}

export const Light = Template.bind({})
Light.args = {
  label: 'Light Button',
  color: 'light',
  size: 'regular',
}
export const Red = Template.bind({})
Red.args = {
  label: 'Red Button',
  color: 'red',
  size: 'regular',
}
export const Dark = Template.bind({})
Dark.args = {
  label: 'Dark Button',
  color: 'dark',
  size: 'regular',
}
export const White = Template.bind({})
White.args = {
  label: 'White Button',
  color: 'white',
  size: 'regular',
}
