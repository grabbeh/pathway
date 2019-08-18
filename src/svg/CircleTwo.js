import React from 'react'

const Circle = ({ size = 100 }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    width='300px'
    height='300px'
    viewBox='0 0 300 300'
    enableBackground='new 0 0 300 300'
    xmlSpace='preserve'
  >
    <defs>
      <path
        id='circlePath'
        d='M-100,150a100,100 0 1,0 200,0a100,100 0 1,0 -200,0'
      />
    </defs>
    <circle cx='150' cy='150' r='150' fill='#F5A623' />
    <g>
      <use xlinkHref='#circlePath' fill='none' />
      <text fill='#000'>
        <textPath xlinkHref='#circlePath'>Key fact</textPath>
      </text>
    </g>
  </svg>
)

export default Circle
