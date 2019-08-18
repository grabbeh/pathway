import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
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
  let { node } = data.allContentfulWhatYouCanDoPage.edges[0]
  let { franchiseeFinancialInfoTitle, franchiseeFinancialInfoContent } = node
  return (
    <Section>
      <Animation>
        <Box mb={3}>
          <SectionTitle>{franchiseeFinancialInfoTitle}</SectionTitle>
        </Box>
      </Animation>
      <Box>
        <Animation>
          <BodyText
            html={franchiseeFinancialInfoContent.childMarkdownRemark.html}
          />
        </Animation>
      </Box>
    </Section>
  )
}

export default MainSection
