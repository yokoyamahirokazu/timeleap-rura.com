// eslint-disable-next-line import/named
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { ImgBox } from './ImgBox'

export default {
  title: 'ImgBox',
  component: ImgBox,
  argTypes: {
    cover: {
      control: {
        type: 'boolean',
      },
    },
    aspectRatio: {
      control: {
        type: 'inline-radio',
      },
      options: ['16/9', '3/2', '4/3', '1/1'],
    },
    direction: {
      control: {
        type: 'inline-radio',
      },
      options: ['vertical', 'holizontal'],
    },
  },
} as ComponentMeta<typeof ImgBox>

const Template: ComponentStory<typeof ImgBox> = (args) => <ImgBox {...args} />

export const Image = Template.bind({})
Image.args = {
  src: 'https://images.microcms-assets.io/assets/cb8c2a91d96b4f258cb45199ff7653bf/6ae04aec59ed4df49f127dce817c404d/eye%20catch%20_RURA%C3%97Safie%C3%97hacomono.png',
  width: 1280,
  height: 720,
  alt: 'demo',
  cover: false,
}
