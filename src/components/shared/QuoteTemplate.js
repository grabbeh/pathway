/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { StandardSection as Section } from '../general'
import ScrollAnimation from '../animations/ScrollAnimation'

const QuoteTemplate = ({ children, bg, variant }) => (
  <Section pt={[3, 4]} pb={[3, 4]} variant={variant} bg={bg}>
    <ScrollAnimation>
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
    </ScrollAnimation>
  </Section>
)

export default QuoteTemplate
