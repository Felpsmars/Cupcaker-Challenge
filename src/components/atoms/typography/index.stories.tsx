import { Story, Meta } from '@storybook/react'
import React from 'react'

import { Typography, TypographyProps, TypographyVariant } from '.'

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta

const Template: Story<TypographyProps> = args => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Typography Text',
  variant: TypographyVariant.h1,
}
