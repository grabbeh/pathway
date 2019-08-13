import React from 'react'
import Box from '../general/Box'
import Text from '../general/Text'
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
    <Box>
      <Menu
        navigationItems={node.navigationItem}
        open={state.open}
        setOpen={state.toggleOpen}
      />
      <Box>
        <Flex flexWrap='wrap'>
          <Box width={225} mr={5}>
            <Link to='/'>
              <Logo />
            </Link>
          </Box>
          <Flex alignItems='center'>
            <MenuHide>
              <Box width={900}>
                <Flex justifyContent='space-between'>
                  {node.navigationItem.map(({ url, title, subtitle }, i) => {
                    return (
                      <Box key={i}>
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
