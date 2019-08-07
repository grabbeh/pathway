import React from 'react'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import Burger from './Burger'
import { css } from 'theme-ui'
import styled from 'styled-components'
import Logo from './Logo'

const Header = () => (
  <Box p={2}>
    <Flex flexWrap='wrap'>
      <Box width={225} mr={5}>
        <Logo />
      </Box>
      <Flex alignItems='center'>
        <MenuHide>
          <Box width={800}>
            <Flex justifyContent='space-between'>
              <Box>
                <Text fontSize={1}>About us</Text>
              </Box>
              <Box>
                <Text fontSize={1}>Homelessness</Text>
              </Box>
              <Box>
                <Text fontSize={1}>What we do</Text>
              </Box>
              <Box>
                <Text fontSize={1}>How you can get involved</Text>
              </Box>
              <Box>
                <Text fontSize={1}>Our online manual</Text>
              </Box>
              <Box>
                <Text fontSize={1}>Contact</Text>
              </Box>
            </Flex>
          </Box>
        </MenuHide>
      </Flex>
      <div style={{ margin: 'auto' }} />
      <BurgerShow>
        <Burger />
      </BurgerShow>
    </Flex>
  </Box>
)

const MenuHide = styled('div')(
  css({
    display: 'flex',
    '@media screen and (max-width: 40em)': {
      display: 'none'
    }
  })
)

const BurgerShow = styled('div')(
  css({
    display: 'none',
    justifyContent: 'flex-end',
    '@media screen and (max-width: 40em)': {
      display: 'flex'
    }
  })
)

export default Header
