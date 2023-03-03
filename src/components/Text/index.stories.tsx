// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Text from '.'

export default {
  title: 'Text',
  component: Text,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Headline1 = Template.bind({})

Headline1.args = {
  style: 'h1',
  label: '見出し1',
}
export const Headline2 = Template.bind({})
Headline2.args = {
  style: 'h2',
  label: '見出し2',
}
export const Headline3 = Template.bind({})
Headline3.args = {
  style: 'h3',
  label: '見出し3',
}
export const Headline4 = Template.bind({})
Headline4.args = {
  style: 'h4',
  label: '見出し4',
}
export const Body = Template.bind({})
Body.args = {
  style: 'body',
  label: '見出し5',
}
