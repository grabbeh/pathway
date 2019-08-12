import React from 'react'
import Box from './general/Box'
import Text from './general/Text'
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
