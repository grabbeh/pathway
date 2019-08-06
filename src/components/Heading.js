import Text from './Text'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 6,
  lineHeight: 1.1,
  m: 0,
  color: 'green'
}

export default Heading
