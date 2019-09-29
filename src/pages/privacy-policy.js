import React from 'react'
import { Footer, Wrapper } from '../components/shared/index'
import { BodyText, SectionTitle } from '../components/typography/index'
import { StandardSection as Section } from '../components/general/index'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulLegalDocument(filter: { title: { eq: "Privacy Policy" } }) {
      edges {
        node {
          title
          content {
            childMarkdownRemark {
              html
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
        <BodyText html={content.childMarkdownRemark.html} />
      </Section>
      <Footer bg='lightGrey' />
    </Wrapper>
  )
}

export default PrivacyPolicy
