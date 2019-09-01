import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

const ScrollAnimation = ({ children, duration = 500, threshold = 0.5 }) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  })

  const props = useSpring({
    config: { duration },
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -100
  })

  return (
    <animated.div style={props} ref={ref}>
      {children}
    </animated.div>
  )
}

export default ScrollAnimation
