// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Card } from './Card'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    radius: {
      control: {
        type: 'inline-radio',
      },
      options: ['small', 'regular', 'medium', 'large', 'none'],
    },
    padding: {
      control: {
        type: 'inline-radio',
      },
      options: ['small', 'regular', 'medium', 'large', 'none'],
    },
    shadow: {
      control: {
        type: 'inline-radio',
      },
      options: ['10', '20', '30', '40', 'none'],
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ padding: '32px' }}>
    <Card {...args} />
  </div>
)

export const CardSample = Template.bind({})

CardSample.args = {
  radius: 'small',
  children: 'カード',
}
