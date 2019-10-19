import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, StandardSection as Section } from '../general'
import { BodyText, SectionTitle, Subtitle } from '../typography'
import { Services } from '../shared'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    howWeCanHelpPage: allContentfulWhatYouCanDoPage {
      nodes {
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
`

const MainSection = () => {
  const data = useStaticQuery(query)
  const {
    franchiseSectionTitle,
    franchiseSectionContent,
    franchiseBenefitsTitle,
    pathwayFranchiseBenefits
  } = data.howWeCanHelpPage.nodes[0]
  return (
    <Section pt={0}>
      <Animation>
        <SectionTitle text={franchiseSectionTitle} />
      </Animation>
      <Animation>
        <BodyText html={franchiseSectionContent.childMarkdownRemark.html} />
      </Animation>
      <Box mb={3}>
        <Animation>
          <Subtitle text={franchiseBenefitsTitle} color='green' />
        </Animation>
      </Box>
      <Services services={pathwayFranchiseBenefits} />
    </Section>
  )
}

export default MainSection
