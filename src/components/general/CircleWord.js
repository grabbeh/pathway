import React from 'react'
import Letter from './Letter'
import Box from './Box'

const CircleWord = ({ word }) => {
  const letters = [...word]
  return (
    <Box
      bg='yellow'
      borderRadius={5}
      height={400}
      width={400}
      position='relative'
    >
      {letters.map((l, i) => (
        <Letter key={i} fontSize={5} fontWeight='bold' transform={i * 10}>
          {l}
        </Letter>
      ))}
    </Box>
  )
}

export default CircleWord
