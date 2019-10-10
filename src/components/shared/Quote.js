/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { StandardSection as Section } from '../general'
import { Subtitle } from '../typography'

const Quote = ({ quote, bg, color, variant, borderColor }) => (
  <Section bg={bg}>
    <Box sx={{ variant: 'modes.blue' }}>{quote}</Box>
  </Section>
)

export default Quote
