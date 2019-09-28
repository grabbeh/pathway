import React from 'react'
import theme from '../theme'
import Box from '../components/general/Box'
import Flex from '../components/general/Flex'
import Text from '../components/typography/Text'

const FontWeights = () => {
  return (
    <Flex flexWrap='wrap'>
      {Object.keys(theme.fontWeights).map((k, i) => (
        <Box key={i} mr={3} height={120} width={120}>
          <Text fontSize={7} fontWeight={theme.fontWeights[k]}>
            {theme.fontWeights[k]}
          </Text>
          <Text>{k}</Text>
        </Box>
      ))}
    </Flex>
  )
}

export default FontWeights
