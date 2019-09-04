import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const ScrollAnimation = ({ children, threshold = 0 }) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  })

  return (
    <AnimatedBox inView={inView} ref={ref}>
      {children}
    </AnimatedBox>
  )
}

export default ScrollAnimation

const AnimatedBox = styled('div')`
  overflow: hidden;
  transform: translateY(${props => (props.inView ? '0px' : '100px')});
  opacity: ${props => (props.inView ? 1 : 0)};
  transition: all 1s ease;
`

//  transform: scale(${props => (props.inView ? 1 : 0.5)});
