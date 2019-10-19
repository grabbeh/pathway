import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { QuoteTemplate } from '../shared'
import { ThemeProvider } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import theme from '../../gatsby-plugin-theme-ui/index'

const shortcodes = { QuoteTemplate }

const query = graphql`
  query {
    homePage: allContentfulHomePage {
      nodes {
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
`

const Quote = () => {
  const data = useStaticQuery(query)
  const {
    quoteContainer: { text }
  } = data.homePage.nodes[0]
  return (
    <ThemeProvider theme={theme} components={shortcodes}>
      <MDXRenderer>{text.childMdx.body}</MDXRenderer>
    </ThemeProvider>
  )
}

export default Quote
