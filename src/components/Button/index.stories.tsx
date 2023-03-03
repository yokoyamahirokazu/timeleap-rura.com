// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Button from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary Button',
}

export const Light = Template.bind({})
Light.args = {
  label: 'Light Button',
  color: 'light',
}
export const Red = Template.bind({})
Red.args = {
  label: 'Red Button',
  color: 'red',
}
export const Dark = Template.bind({})
Dark.args = {
  label: 'Dark Button',
  color: 'dark',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: 'extraLarge',
  label: 'ExtraLarge Button',
}
export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Large Button',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  label: 'Medium Button',
}
export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Small Button',
}
