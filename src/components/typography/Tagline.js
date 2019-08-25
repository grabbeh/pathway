import React from 'react'
import Text from './Text'
import Box from '../general/Box'
import MarkdownText from '../general/MarkdownText'

const Tagline = props => (
  <Box>
    {props.html ? (
      <MarkdownText
        {...props}
        fontSize={[5, 6]}
        fontWeight='subtitle'
        lineHeight={['medium', 'tagline']}
        color={props.color}
        html={props.html}
      />
    ) : (
      <Text.h2
        {...props}
        fontSize={[5, 6]}
        fontWeight='subtitle'
        lineHeight={['medium', 'tagline']}
        color={props.color}
      >
        {props.children}
      </Text.h2>
    )}
  </Box>
)

export default Tagline
