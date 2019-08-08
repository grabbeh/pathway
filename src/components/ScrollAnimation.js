import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

const ScrollAnimation = ({ children, values }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const props = useSpring({
    config: { duration: 500 },
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : 100
  })

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  )
}

export default ScrollAnimation
