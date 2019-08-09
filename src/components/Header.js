import React from 'react'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import Burger from './Burger'
import { css } from 'theme-ui'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import { MdClose } from 'react-icons/md'
import { useAppContext } from './Wrapper'

const Header = () => {
  let state = useAppContext()
  return (
    <Box>
      <Menu open={state.open} setOpen={state.toggleOpen} />
      <Box>
        <Flex flexWrap='wrap'>
          <Box width={225} mr={5}>
            <Logo />
          </Box>
          <Flex justifyContent='center' alignItems='center'>
            <MenuHide>
              <Box width={900}>
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
        </Flex>
      </Box>
      {state.open ? (
        <Box
          style={{ cursor: 'pointer' }}
          onClick={() => {
            state.toggleOpen(!state.open)
          }}
          position='absolute'
          top={3}
          right={3}
          mt={-10}
          mr={-10}
        >
          <Text fontSize={5} fontWeight='bold' color='grey'>
            <MdClose />
          </Text>
        </Box>
      ) : (
        <Box position='absolute' top={3} right={3}>
          <BurgerShow>
            <Box
              style={{ cursor: 'pointer' }}
              onClick={() => {
                state.toggleOpen(!state.open)
              }}
            >
              <Burger
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  state.toggleOpen(!state.open)
                }}
              />
            </Box>
          </BurgerShow>
        </Box>
      )}
    </Box>
  )
}

const MenuHide = styled('div')(
  css({
    display: 'flex',
    '@media screen and (max-width: 1200px)': {
      display: 'none'
    }
  })
)

const BurgerShow = styled('div')(
  css({
    display: 'none',
    justifyContent: 'flex-end',
    '@media screen and (max-width: 1200px)': {
      display: 'flex'
    }
  })
)

export default Header
