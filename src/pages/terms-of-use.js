import React from 'react'
import { Footer, Wrapper } from '../components/shared'
import { SectionTitle } from '../components/typography'
import { StandardSection as Section } from '../components/general'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    legalDocument: allContentfulLegalDocument(
      filter: { title: { eq: "Terms of use" } }
    ) {
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

const TermsOfUse = () => {
  const data = useStaticQuery(query)
  const { content, title } = data.legalDocument.nodes[0]
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

export default TermsOfUse
