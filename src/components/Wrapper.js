import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../theme.js'
import Box from './Box'
import Header from './Header'

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ margin:0; padding: 0;
    font-family: Poppins, system-ui, sans-serif;
    line-height: 1.5;
  }
`

const Wrapper = props => {
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
        <Box>
          <Header />
          <Box>{props.children}</Box>
          <footer>
            <Box bg='grey' height={100} />
          </footer>
        </Box>
      </ThemeProvider>
    </Fragment>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
