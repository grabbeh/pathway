import React from 'react'
import MarkdownText from '../general/MarkdownText'
import Box from '../general/Box'
import Text from './Text'

const Subtitle = ({ html, color, children }, props) => (
  <Box>
    {html ? (
      <MarkdownText
        {...props}
        fontSize={[3, 4]}
        lineHeight='subtitle'
        fontWeight='subtitle'
        color={color || 'grey'}
        html={html}
      />
    ) : (
      <Text.h3
        {...props}
        fontSize={[3, 4]}
        lineHeight='subtitle'
        fontWeight='subtitle'
        color={color || 'grey'}
      >
        {children}
      </Text.h3>
    )}
  </Box>
)

export default Subtitle
