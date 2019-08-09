import React from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import { useSpring, animated } from 'react-spring'

const Menu = ({ open, setOpen }) => {
  const props = useSpring({
    config: { duration: 200 },
    opacity: open ? 1 : 0,
    touchAction: 'none',
    overscrollBehavior: 'contain'
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
        <Box pt={[4, 6]}>
          <Flex alignItems='center' justifyContent='center'>
            <Box>
              <Box mb={3}>
                <Text fontWeight='bold' color='grey' fontSize={5}>
                  Home
                </Text>
              </Box>
              <Box mb={3}>
                <Text fontWeight='bold' color='grey' fontSize={5}>
                  About
                </Text>
              </Box>
              <Box>
                <Text fontWeight='bold' color='grey' fontSize={5}>
                  Team
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </animated.div>
  )
}

export default Menu
