import React from 'react'
import theme from '../gatsby-plugin-theme-ui'
import { Box, Flex } from '../components/general'
import { Text } from '../components/typography'

const FontSizes = () => (
  <Flex alignItems='baseline' flexWrap='wrap'>
    {theme.fontSizes.map((f, i) => (
      <Box key={i} mr={3}>
        <Text fontSize={f}>{`${f}px`}</Text>
      </Box>
    ))}
  </Flex>
)

export default FontSizes
