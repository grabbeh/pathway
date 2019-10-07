import React from 'react'
import theme from '../gatsby-plugin-theme-ui'
import { Box, Flex } from '../components/general'
import { Text } from '../components/typography'

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
