import React from 'react'
import Box from './Box'
import Text from './Text'
import StandardSection from './StandardSection'

const Footer = () => (
  <footer>
    <Box bg='grey' height={150}>
      <StandardSection>
        <Text color='white'>Footer, content tbc</Text>
      </StandardSection>
    </Box>
  </footer>
)

export default Footer
