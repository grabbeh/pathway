import React from 'react'
import { Box } from '../components/general/index'

const space = [0, 4, 8, 16, 32, 64, 128]
const Spacing = () => (
  <div>
    {space.map((s, i) => {
      return (
        <div key={i}>
          <Box style={{ display: 'inline-block' }} bg='blue' p={i}>
            {i}
          </Box>
        </div>
      )
    })}
  </div>
)

export default Spacing
