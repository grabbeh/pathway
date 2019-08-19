import React from 'react'
import Box from '../general/Box'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import Link from '../general/InternalLink'
import { useSpring, animated } from 'react-spring'

const Menu = ({ open, toggleOpen, navigationItems }) => {
  const props = useSpring({
    config: { duration: 300 },
    opacity: open ? 1 : 0
  })
  return (
    <animated.div style={props}>
      <Box
        onClick={toggleOpen}
        width='100%'
        ml={open ? 0 : '100%'}
        zIndex={open ? 9999 : -1}
        position='fixed'
        aria-hidden={!!open}
        top={65}
        left={0}
        bg='white'
        pt={[5, 6]}
      >
        <Box>
          <Flex height='100vh' justifyContent={['flex-start', 'center']}>
            <Box ml={[3, 0]}>
              {navigationItems.map(({ url, title }, i) => {
                return (
                  <Box mb={3} key={i}>
                    <Link to={`/${url}`}>
                      <Text
                        textAlign={['left', 'center']}
                        color='grey'
                        fontWeight='bold'
                        fontSize={[4, 5]}
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
