import React from 'react'
import theme from '../theme'
import Flex from '../components/general/Flex'
import Box from '../components/general/Box'
import Text from '../components/typography/Text'

const FontSizes = () => (
  <Flex alignItems='baseline' flexWrap='wrap'>
    {theme.fontSizes.map(f => (
      <Box mr={3}>
        <Text fontSize={f}>{`${f}px`}</Text>
      </Box>
    ))}
  </Flex>
)

export default FontSizes
