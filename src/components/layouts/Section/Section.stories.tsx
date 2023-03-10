// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Section } from './Section'

export default {
  title: 'layouts/Section',
  component: Section,
  argTypes: {
    bg: {
      control: {
        type: 'inline-radio',
      },
      options: ['light', 'primary', 'dark'],
    },
    full: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />

export const SectionSample = Template.bind({})

SectionSample.args = {
  children: 'セクション',
}
