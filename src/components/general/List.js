import styled from 'styled-components'
import { layout, space, shadow, position, color, border } from 'styled-system'
import * as React from 'react'
import propTypes from '@styled-system/prop-types'

const StyledList = styled('ul')(
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  space,
  shadow,
  layout,
  color,
  border,
  position
)

// To recognise propTypes, we have to create new Box to wrap StyledBox
const List = props => {
  return <StyledList {...props}>{props.children}</StyledList>
}

List.displayName = 'List'

List.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.position
}

export default List
