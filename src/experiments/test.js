import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { MDXWrapper, FindOutMore, Footer } from '../components/shared'
import Hero from '../components/about-us/Hero'
import Survey from '../components/about-us/Survey'
import Services from '../components/about-us/Services'
import Footnotes from '../components/about-us/Footnotes'
import Layout from '../components/about-us/Layout'
import MainSectionTwo from '../components/about-us/MainSectionTwo'

const query = graphql`
  query {
    allContentfulAboutPage {
      nodes {
        fullMdxPage {
          childMdx {
            body
          }
        }
      }
    }
  }
`

const shortcodes = {
  MDXWrapper,
  FindOutMore,
  Footer,
  Hero,
  Survey,
  Services,
  Footnotes,
  Layout,
  MainSectionTwo
}

const TestPage = () => {
  const data = useStaticQuery(query)
  const { fullMdxPage } = data.allContentfulAboutPage.nodes[0]
  return (
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{fullMdxPage.childMdx.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default TestPage
