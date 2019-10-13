/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StandardSection as Section, Box } from '../general'

const QuoteTemplate = ({ children, bg, variant }) => (
  <Section variant={variant} bg={bg}>
    <Box
      sx={{
        borderLeft: '10px solid',
        pl: [3, 5],
        py: 3,
        fontSize: 7,
        fontWeight: 'bold',
        fontStyle: 'italic'
      }}
    >
      {children}
    </Box>
  </Section>
)

export default QuoteTemplate
