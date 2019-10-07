import React from 'react'
import { Footer, Wrapper } from '../components/shared'
import { SectionTitle } from '../components/typography'
import { StandardSection as Section } from '../components/general'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    allContentfulLegalDocument(filter: { title: { eq: "Privacy policy" } }) {
      edges {
        node {
          title
          content {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

const PrivacyPolicy = () => {
  const data = useStaticQuery(query)
  const { content, title } = data.allContentfulLegalDocument.edges[0].node
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

export default PrivacyPolicy
