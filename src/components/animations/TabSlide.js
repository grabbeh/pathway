import React from 'react'
import { useSpring, animated } from 'react-spring'

const TabSlide = ({ children, active }) => {
  const props = useSpring({
    config: { duration: 500 },
    opacity: active ? 1 : 0,
    marginTop: active ? 0 : 100
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default TabSlide
