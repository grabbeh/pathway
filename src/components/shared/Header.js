import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Burger from '../general/Burger'
import { css } from 'theme-ui'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Link from '../general/InternalLink'
import { MdClose } from 'react-icons/md'
import { useAppContext } from './Wrapper'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulNavigationContainer {
      edges {
        node {
          navigationItem {
            title
            subtitle
            url
          }
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulNavigationContainer.edges[0]
  let state = useAppContext()
  return (
    <Box py={2}>
      <Flex>
        <Flex flex='1'>
          <Box width={225}>
            <Link tabIndex='0' to='/'>
              <Logo />
            </Link>
          </Box>
        </Flex>
        <Flex
          aria-hidden={state.open}
          flex='4'
          justifyContent='flex-end'
          alignItems='center'
        >
          <MenuHide>
            <nav role='menu'>
              <Flex>
                {node.navigationItem.map(({ url, title, subtitle }, i) => {
                  return (
                    <Box pr={4} key={i}>
                      <Link to={`/${url}`}>
                        <Text fontSize={2}>{title}</Text>
                        <Text color='blue' fontSize={0}>
                          {subtitle}
                        </Text>
                      </Link>
                    </Box>
                  )
                })}
              </Flex>
            </nav>
          </MenuHide>
        </Flex>
      </Flex>

      <Box
        style={{ cursor: 'pointer' }}
        onClick={() => {
          state.toggleOpen(!state.open)
        }}
        position='absolute'
        top={3}
        right={3}
        aria-expanded={state.open}
        aria-haspopup
      >
        {state.open ? (
          <Text fontSize={5} fontWeight='bold' color='grey'>
            <MdClose />
          </Text>
        ) : (
          <Box position='absolute' top={2} right={2}>
            <BurgerShow>
              <Box
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  state.toggleOpen(!state.open)
                }}
              >
                <Burger />
              </Box>
            </BurgerShow>
          </Box>
        )}
      </Box>
      <Menu
        navigationItems={node.navigationItem}
        open={state.open}
        toggleOpen={state.toggleOpen}
      />
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
