import React from 'react'
import { StandardSection as Section } from '../general/index'
import { ThemeProvider } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          mainSection {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

const AboutSection = () => {
  const data = useStaticQuery(query)
  const { mainSection } = data.allContentfulAboutPage.edges[0].node
  return (
    <ThemeProvider
      theme={{
        styles: {
          h2: {
            color: 'green'
          },
          h3: {
            color: 'green'
          }
        }
      }}
    >
      <Section>
        <Animation>
          <MDXRenderer>{mainSection.childMdx.body}</MDXRenderer>
        </Animation>
      </Section>
    </ThemeProvider>
  )
}

export default AboutSection
