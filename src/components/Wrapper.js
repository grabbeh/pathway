import React, { Fragment, useState, useContext } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../theme.js'
import Box from './Box'
import Header from './Header'
import Footer from './Footer'
import '../index.css'
import { useSpring, animated } from 'react-spring'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; padding: 0;
    font-family: Poppins, system-ui, sans-serif;
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

  const animProps = useSpring({
    config: { duration: 300 },
    opacity: open ? 0 : 1
  })

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
      <Context.Provider value={context}>
        <ThemeProvider theme={theme}>
          <Box>
            <Header />
            <animated.div style={animProps}>
              <Box zIndex={open ? -1 : 9999}>{props.children}</Box>
            </animated.div>
            <Footer />
          </Box>
        </ThemeProvider>
      </Context.Provider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
