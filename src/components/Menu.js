import React from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Link from './InternalLink'
import { useSpring, animated } from 'react-spring'

const Menu = ({ open, navigationItems }) => {
  const props = useSpring({
    config: { duration: 300 },
    opacity: open ? 1 : 0
  })
  return (
    <animated.div style={props}>
      <Box
        ml={open ? 0 : '-100%'}
        width='100%'
        zIndex={open ? 999 : 0}
        position='fixed'
        top={30}
        left={0}
        bg='white'
        pt={[5,6]}
      >
        <Box>
          <Flex justifyContent='center'>
            <Box>
              {navigationItems.map(({ url, title }, i) => {
                return (
                  <Box mb={3} key={i}>
                    <Link to={`/${url}`}>
                      <Text
                        textAlign='center'
                        color='grey'
                        fontWeight='bold'
                        fontSize={5}
                      >
                        {title}
                      </Text>
                    </Link>
                  </Box>
                )
              })}
            </Box>
          </Flex>
        </Box>
      </Box>
    </animated.div>
  )
}

export default Menu
