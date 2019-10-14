import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { QuoteTemplate } from '../shared'
import { ThemeProvider } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import theme from '../../gatsby-plugin-theme-ui/index'

const shortcodes = { QuoteTemplate }

const query = graphql`
  query {
    allContentfulOnlineManualPage {
      edges {
        node {
          quoteContainer {
            text {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  }
`

const Quote = () => {
  const data = useStaticQuery(query)
  const {
    quoteContainer: { text }
  } = data.allContentfulOnlineManualPage.edges[0].node
  return (
    <ThemeProvider theme={theme} components={shortcodes}>
      <MDXRenderer>{text.childMdx.body}</MDXRenderer>
    </ThemeProvider>
  )
}

export default Quote
