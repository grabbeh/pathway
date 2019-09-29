import React from 'react'
import {
  Box,
  Flex,
  InternalLink as Link,
  List,
  ListItem
} from '../general/index'
import { Text } from '../typography/index'
import styled from 'styled-components'

const Menu = ({ open, toggleOpen, navigationItems }) => {
  return (
    <AnimatedBox open={open}>
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
          pt={[4, 5]}
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
                            fontSize={[4, 5]}
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
    </AnimatedBox>
  )
}

export default Menu

const AnimatedBox = styled('div')`
  opacity: ${props => (props.open ? 1 : 0)};
  transition: all 0.3s ease;
`
