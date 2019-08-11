import React from 'react'
import { useSpring, animated } from 'react-spring'

const LoadAnimation = ({ children, load }) => {
  const props = useSpring({
    config: { duration: 500 },
    opacity: load ? 1 : 0,
    marginTop: load ? 0 : 100
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default LoadAnimation
