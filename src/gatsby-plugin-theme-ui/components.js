import React from 'react'
import Prism from '@theme-ui/prism'
import { Box } from '../components/general/index'
import { Text } from '../components/typography'

export default {
   pre: props => (
    <Box
      width={[1, 1, 3/4]}
      overflowX='auto'
      mt={3}
      p={3}
    >
     <Text fontSize={3}>
      {props.children}
     </Text>
    </Box>
  ),
  code: Prism
}
