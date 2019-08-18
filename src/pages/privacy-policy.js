import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import Footer from '../components/shared/Footer'
import SectionTitle from '../components/typography/SectionTitle'
import BodyText from '../components/typography/BodyText'
import { graphql, useStaticQuery } from 'gatsby'
import StandardSection from '../components/general/WideSection'

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
  let {
    node: { content, title }
  } = data.allContentfulLegalDocument.edges[0]

  return (
    <Wrapper>
      <StandardSection>
        <SectionTitle color='green'>{title}</SectionTitle>
        <BodyText html={content.childMarkdownRemark.html} />
      </StandardSection>
      <Footer bg='lightGrey' />
    </Wrapper>
  )
}

export default PrivacyPolicy
