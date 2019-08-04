import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../theme.js'
import Box from '../components/Box'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; padding: 0;}
`

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Friendly neighbourhood cafe/restaurant in Stroud Green'
          },
          {
            name: 'keywords',
            content: 'Crouch End, Stroud Green, Cafe, Restaurant'
          }
        ]}
      >
        <html lang='en' />
      </Helmet>
      <Style />
      <ThemeProvider theme={theme}>
        <Box>{props.children}</Box>
      </ThemeProvider>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
