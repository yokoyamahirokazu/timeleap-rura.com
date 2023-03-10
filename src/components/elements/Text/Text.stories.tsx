// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Text } from './Text'

export default {
  title: 'Text',
  component: Text,

  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['es', 's', 'r', 'm', 'l', 'el'],
    },
    weight: {
      control: {
        type: 'inline-radio',
      },
      options: ['light', 'regular', 'bold'],
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Body = Template.bind({})
Body.args = {
  type: 'body',
  label: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
}
export const Headline = Template.bind({})
Headline.args = {
  type: 'headline',
  label: 'RURAは店頭に置かれたモニター越しに遠隔地から接客できるシステムです。',
}
