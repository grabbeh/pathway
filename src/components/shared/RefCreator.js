import React, { createRef } from 'react'
import Box from '../general/Box'
import { useAppContext } from '../shared/Wrapper'

const RefCreator = ({ children }) => {
  let state = useAppContext()
  let childrenWithIds = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, { id: i })
  })

  const refs = childrenWithIds.reduce((acc, value) => {
    acc[value.id] = createRef()
    return acc
  }, {})

  state.saveRefs(refs)

  let childrenWithRefs = React.Children.map(childrenWithIds, child => {
    return React.cloneElement(child, { ref: refs[child.id] })
  })
  return <Box>{childrenWithRefs}</Box>
}

export default RefCreator
