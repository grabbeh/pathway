import React from 'react'
import ListItem from '../general/ListItem'

export const List = props => (
  <ListItem
    style={{ listStyleType: 'circle' }}
    fontWeight='normal'
    pb={2}
    fontSize={[1,3]}
    color='grey'
  >
    {props.children}
  </ListItem>
)

export default List
