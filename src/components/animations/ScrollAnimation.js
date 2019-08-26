import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { useAppContext } from '../shared/Wrapper'

const ScrollAnimation = ({ children, duration = 500, id }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  let state = useAppContext()

  useEffect(() => {
    if (inView && entry.target.id) {
      state.addId(entry.target.id)
    }
  })

  const props = useSpring({
    config: { duration },
    opacity: inView ? 1 : 0,
    marginTop: inView ? 0 : 100
  })

  return (
    <animated.div id={id} ref={ref} style={props}>
      {children}
    </animated.div>
  )
}

export default ScrollAnimation
