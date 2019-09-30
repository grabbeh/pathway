import React from 'react'
import Prism from '@theme-ui/prism'
import { Box } from '../components/general/index'

export default {
  pre: props => (
    <Box
      width={[1, 1, 3/4]}
      overflowX='auto'
      mt={3}
      bg='#fdfdfd'
      p={0}
    >
      {props.children}
    </Box>
  ),
  code: Prism
}
