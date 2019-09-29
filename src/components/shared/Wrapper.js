import React, { Fragment, useState, useContext } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui/index'
import { Box } from '../general/index'
import Header from './Header'
import '../../index.css'
import { MDXProvider } from '@mdx-js/react'
import Table from '../mdx/Table'
import List from '../mdx/List'
import ListItem from '../mdx/ListItem'
import Paragraph from '../mdx/Paragraph'
import Sup from '../mdx/Sup'
import OrderedList from '../mdx/OrderedList'
import { CookieBanner } from '../shared/index'

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

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const Wrapper = props => {
  const data = useStaticQuery(query)
  const [open, setOpen] = useState(false)
  const context = {
    open,
    setOpen,
    toggleOpen: () => setOpen(!open)
  }

  return (
    <Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Pathway Social Franchise'
          },
          {
            name: 'keywords',
            content:
              'Homelessness, franchises, charity, partnerships, hospitals'
          }
        ]}
      >
        <html lang='en' />
      </Helmet>
      <Style />
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <Context.Provider value={context}>
            <Box>
              <Header />
              <Box aria-hidden={open} hidden={open} zIndex={open ? -1 : 9999}>
                {props.children}
              </Box>
              <CookieBanner />
            </Box>
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
