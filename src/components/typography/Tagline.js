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
        color={props.color}
        lineHeight='tagline'
        html={props.html}
      />
    ) : (
      <Text.h2
        {...props}
        fontWeight='subtitle'
        lineHeight='tagline'
        color={props.color}
        fontSize={5}
      >
        {props.children}
      </Text.h2>
    )}
  </Box>
)

export default Tagline
