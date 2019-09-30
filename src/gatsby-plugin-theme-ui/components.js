import React from 'react'
import Prism from '@theme-ui/prism'
import { Box } from '../components/general/index'

export default {
  pre: props => props.children,
  code: Prism
}
