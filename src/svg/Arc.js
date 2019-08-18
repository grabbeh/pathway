import React from 'react'

const Circle = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 168 168'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M-100,150a100,100 0 1,0 200,0a100,100 0 1,0 -200,0'
      fill='#F7B100'
    />
  </svg>
)

export default Circle
