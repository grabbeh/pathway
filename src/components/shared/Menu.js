import React from 'react'
import Box from '../general/Box'
import Flex from '../general/Flex'
import Text from '../typography/Text'
import Link from '../general/InternalLink'
import List from '../general/List'
import ListItem from '../general/ListItem'
import { useSpring, animated } from 'react-spring'

const Menu = ({ open, toggleOpen, navigationItems }) => {
  const props = useSpring({
    config: { duration: 300 },
    opacity: open ? 1 : 0
  })
  return (
    <animated.div style={props}>
      <nav>
        <Box
          hidden={!open}
          onClick={toggleOpen}
          width='100%'
          ml={open ? 0 : '100%'}
          zIndex={open ? 9999 : -1}
          position='fixed'
          aria-hidden={!open}
          top={65}
          left={0}
          bg='white'
          pt={[5, 6]}
        >
          <Box>
            <Flex height='100vh' justifyContent={['flex-start', 'center']}>
              <Box ml={[3, 0]}>
                <nav role='menu'>
                  <List>
                    {navigationItems.map(({ url, title }, i) => (
                      <ListItem tabIndex={open ? i + 1 : -1} mb={3} key={i}>
                        <Link role='menuitem' to={`/${url}`}>
                          <Text
                            textAlign={['left', 'center']}
                            color='grey'
                            fontWeight='bold'
                            fontSize={[4, 7]}
                          >
                            {title}
                          </Text>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </nav>
              </Box>
            </Flex>
          </Box>
        </Box>
      </nav>
    </animated.div>
  )
}

export default Menu
