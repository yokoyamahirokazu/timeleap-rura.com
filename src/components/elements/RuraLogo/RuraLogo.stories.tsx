// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { RuraLogo } from './RuraLogo'

export default {
  title: 'RuraLogo',
  component: RuraLogo,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'white'],
    },
    text: {
      control: {
        type: 'inline-radio',
      },
      options: ['left', 'center', 'right', 'full', 'none'],
    },
    direciton: {
      control: {
        type: 'inline-radio',
      },
      options: ['vertical', 'holizontal'],
    },
  },
} as ComponentMeta<typeof RuraLogo>

const Template: ComponentStory<typeof RuraLogo> = (args) => (
  <div style={{ padding: '32px', maxWidth: '320px' }}>
    <RuraLogo {...args} />
  </div>
)

export const LogoSample = Template.bind({})

LogoSample.args = {
  color: 'primary',
}
