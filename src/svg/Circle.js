import React from 'react'

const Circle = ({ size = 100, color = '#F7B100' }) => (
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
      d='M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168Z'
      fill={color}
    />
  </svg>
)

export default Circle
