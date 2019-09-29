import React from 'react'
import Box from '../components/general/Box'

const space = [0, 4, 8, 16, 32, 64, 128, 256]
const FontSizes = () => (
  <div>
    {space.map((s, i) => {
      return (
        <div>
          <Box style={{ display: 'inline-block' }} bg='blue' p={i}>
            {i}
          </Box>
        </div>
      )
    })}
  </div>
)

export default FontSizes
