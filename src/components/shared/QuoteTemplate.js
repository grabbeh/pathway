/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { StandardSection as Section } from '../general'

const QuoteTemplate = ({ children, bg, variant }) => (
  <Section variant={variant} bg={bg}>
    <Box
      as='h2'
      sx={{
        fontSize: [5, 6],
        fontWeight: 'subtitle',
        lineHeight: ['medium', 'tagline'],
        fontStyle: 'italic'
      }}
    >
      {children}
    </Box>
  </Section>
)

export default QuoteTemplate
