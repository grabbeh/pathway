import React from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Link from './InternalLink'
import { useSpring, animated } from 'react-spring'

const Menu = ({ open, navigationItems }) => {
  const props = useSpring({
    config: { duration: 200 },
    opacity: open ? 1 : 0
  })
  return (
    <animated.div style={props}>
      <Box
        aria-hidden='true'
        zIndex='999'
        height='100vh'
        maxHeight='100vh'
        width={1}
        position='fixed'
        bg='white'
        mt={5}
      >
        <Box>
          <Flex alignItems='center' justifyContent='center'>
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
