import styled from 'styled-components'
import {
  layout,
  space,
  shadow,
  position,
  color,
  border,
  typography
} from 'styled-system'
import * as React from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

const StyledButton = styled('button')(
  {
    outline: '1px solid transparent',
    cursor: 'pointer',
    border: 0
  },
  space,
  shadow,
  layout,
  typography,
  color,
  border,
  position
)

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.displayName = 'Box'

Button.defaultProps = {
  p: 0,
  m: 0,
  bg: 'white'
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Button.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.position,
  borderColor: numberStringOrArray,
  boxShadow: numberStringOrArray,
  fontWeight: numberStringOrArray,
  height: numberStringOrArray,
  borderRadius: PropTypes.number
}

export default Button
