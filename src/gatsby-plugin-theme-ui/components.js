import React from 'react'
import Prism from '@theme-ui/prism'
import { Box } from '../components/general/index'
import { Text } from '../components/typography'

export default {
   pre: props => props.children,
  code: Prism
}
