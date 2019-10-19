import React from 'react'
import { Footer, Wrapper } from '../components/shared'
import { SectionTitle } from '../components/typography'
import { StandardSection as Section } from '../components/general'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulLegalDocument(filter: { title: { eq: "Cookie policy" } }) {
      nodes {
        title
        content {
          childMdx {
            body
          }
        }
      }
    }
  }
`

const CookiePolicy = () => {
  const data = useStaticQuery(query)
  const { content, title } = data.allContentfulLegalDocument.nodes[0]
  return (
    <Wrapper>
      <Section>
        <SectionTitle color='green' text={title} />
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </Section>
      <Footer bg='lightGrey' />
    </Wrapper>
  )
}

export default CookiePolicy
