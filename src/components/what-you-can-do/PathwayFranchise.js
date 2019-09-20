import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import SectionTitle from '../typography/SectionTitle'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'
import Services from '../shared/Services'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          franchiseSectionTitle
          franchiseSectionContent {
            childMarkdownRemark {
              html
            }
          }
          franchiseBenefitsTitle
          pathwayFranchiseBenefits {
            icon {
              file {
                url
              }
            }
            name
            description {
              childMarkdownRemark {
                html
              }
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
    franchiseSectionTitle,
    franchiseSectionContent,
    franchiseBenefitsTitle,
    pathwayFranchiseBenefits
  } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Section pt={0}>
      <Animation>
        <SectionTitle>{franchiseSectionTitle}</SectionTitle>
      </Animation>
      <Animation>
        <BodyText html={franchiseSectionContent.childMarkdownRemark.html} />
      </Animation>
      <Box mb={3}>
        <Animation>
          <Subtitle color='green'>{franchiseBenefitsTitle}</Subtitle>
        </Animation>
      </Box>
      <Services services={pathwayFranchiseBenefits} />
    </Section>
  )
}

export default MainSection
