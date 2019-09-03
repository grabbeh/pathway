import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled, { keyframes } from 'styled-components'
import { useSpring, animated } from 'react-spring'

const ScrollAnimation = ({ children, threshold = 0 }) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  })

  return (
    <AnimatedBox ref={ref} inView={inView}>
      {children}
    </AnimatedBox>
  )
}

export default ScrollAnimation

const AnimatedBox = styled('div')`
  overflow: hidden;
  transform: translateX(${props => (props.inView ? '0px' : '50px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: all 1s ease;
`

// scale(${props => (props.inView ? 1 : 0.5)});
