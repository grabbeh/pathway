import React from 'react'
import Text from './Text'
import Box from '../general/Box'
import MarkdownText from '../general/MarkdownText'

const Tagline = props => (
  <Box>
    {props.html ? (
      <MarkdownText
        {...props}
        fontSize={5}
        fontWeight='subtitle'
        color={props.color}
        html={props.html}
      />
    ) : (
      <Text {...props} fontWeight='bold' color={props.color} fontSize={5}>
        {props.children}
      </Text>
    )}
  </Box>
)

export default Tagline
