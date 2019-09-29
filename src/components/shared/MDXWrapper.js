import React, { Fragment, useContext, useState } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui/index'
import '../../index.css'
import { MDXProvider } from '@mdx-js/react'
import Table from '../mdx/Table'
import List from '../mdx/List'
import ListItem from '../mdx/ListItem'
import Paragraph from '../mdx/Paragraph'
import Sup from '../mdx/Sup'
import OrderedList from '../mdx/OrderedList'
import { Box, Flex } from '../general'

const components = {
  ol: OrderedList,
  table: Table,
  ul: List,
  li: ListItem,
  p: Paragraph,
  sup: Sup
}

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin:0; padding: 0;
    font-family: Poppins, Segoe UI, system-ui, sans-serif;
    line-height: 1.5;
  }
`
export const Context = React.createContext()
export const useAppContext = () => useContext(Context)

const Wrapper = props => {
  const [open, setOpen] = useState(false)
  const context = {
    open,
    setOpen,
    toggleOpen: () => setOpen(!open)
  }

  return (
    <Fragment>
      <Helmet>
        <html lang='en' />
      </Helmet>
      <Style />
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <Context.Provider value={context}>
            <Flex justifyContent='center'>
              <Box maxWidth={1000} width={1} px={[2, 3]}>
                {props.children}
              </Box>
            </Flex>
          </Context.Provider>
        </MDXProvider>
      </ThemeProvider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
