import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          franchiseeFinancialInfoTitle
          franchiseeFinancialInfoContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const {
    franchiseeFinancialInfoTitle,
    franchiseeFinancialInfoContent
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Section pb={3}>
      <Animation>
        <SectionTitle>{franchiseeFinancialInfoTitle}</SectionTitle>
      </Animation>
      <Animation>
        <BodyText
          html={franchiseeFinancialInfoContent.childMarkdownRemark.html}
        />
      </Animation>
    </Section>
  )
}

export default MainSection
