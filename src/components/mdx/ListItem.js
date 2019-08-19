import React from 'react'
import ListItem from '../general/ListItem'

export const List = props => (
  <ListItem fontWeight='normal' pb={2} fontSize={3} color='grey'>
    {props.children}
  </ListItem>
)

export default List
