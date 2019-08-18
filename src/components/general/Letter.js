import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography, style } from 'styled-system'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

export const caps = props =>
  props.caps
    ? {
      textTransform: 'uppercase'
    }
    : null

const rotate = style({
  prop: 'transform',
  cssProperty: 'transform',
  key: 'rotate',
  transformValue: n => {
    return `rotate(${n}deg)`
  }
})

const StyledLetter = styled('span')(
  {
    height: '200px',
    position: 'absolute',
    width: '20px',
    left: 170,
    top: 10,
    transformOrigin: 'bottom center'
  },
  typography,
  rotate,
  space,
  color,
  caps,
  layout
)

const Letter = props => {
  return <StyledLetter {...props}>{props.children}</StyledLetter>
}

Letter.displayName = 'Letter'

Letter.propTypes = {
  ...propTypes.space,
  ...propTypes.typography,
  color: PropTypes.string
}

export default Letter
