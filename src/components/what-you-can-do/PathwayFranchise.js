import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, StandardSection as Section } from '../general/index'
import { BodyText, SectionTitle, Subtitle } from '../typography/index'
import { Services } from '../shared/index'
import Animation from '../animations/ScrollAnimation'

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
