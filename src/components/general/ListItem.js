import styled from 'styled-components'
import { layout, space, border, typography, color } from 'styled-system'
import * as React from 'react'
import propTypes from '@styled-system/prop-types'

const StyledListItem = styled('li')(
  {
    listStyle: 'none'
  },
  space,
  layout,
  color,
  border,
  typography
)

// To recognise propTypes, we have to create new Box to wrap StyledBox
const ListItem = props => {
  return <StyledListItem {...props}>{props.children}</StyledListItem>
}

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.position
}

ListItem.defaultProps = {
  m: 0
}

export default ListItem
