import React from 'react'
import Box from '../components/general/Box'
import Flex from '../components/general/Flex'

const colors = {
  blue: '#37AEE3',
  green: '#00A880',
  grey: '#4A4A4A',
  lightGrey: '#F9F9F9',
  yellow: '#F5A623',
  turquoise: '#518399'
}

const Colors = () => {
  return (
    <Flex flexWrap='wrap'>
      {Object.keys(colors).map((k, i) => (
        <Box key={i}>
          <Box mr={3} bg={colors[k]} height={120} width={120} />
          <Box>{colors[k]}</Box>
          <Box>{k}</Box>
        </Box>
      ))}
    </Flex>
  )
}

export default Colors
