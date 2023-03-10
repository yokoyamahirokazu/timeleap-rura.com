// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Header } from './Header'

export default {
  title: 'layouts/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const HeaderSample = Template.bind({})
