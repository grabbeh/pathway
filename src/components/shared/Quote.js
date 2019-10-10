/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StandardSection as Section, Box } from '../general'

const Quote = ({ quote, bg, variant }) => (
  <Section variant={variant} bg={bg}>
    <Box sx={{ fontSize: 5, fontWeight: 'bold', variant: 'modes.blue' }}>
      {quote}
    </Box>
  </Section>
)

export default Quote
