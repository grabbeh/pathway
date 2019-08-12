import Text from './general/Text'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 7,
  lineHeight: '68px',
  m: 0,
  color: 'green',
  mb: 3
}

export default Heading
